import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'http://localhost:8080/soda/search?query='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sodas, setSodas] = useState([])

    const fetchDrinks = useCallback(async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        if(data || data === undefined) {
          setSodas(data);
        } else {
          setSodas([]);
        }
      } catch(error) {
        console.log(error);
        setSodas([]);
      }
      setLoading(false);
    }, [searchTerm]);


    useEffect(() => {
      fetchDrinks();
    }, [searchTerm, fetchDrinks]);

  return <AppContext.Provider value={{
    loading, searchTerm, sodas, setSearchTerm, setSodas
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }