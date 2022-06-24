import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('a');
    const [sodas, setSodas] = useState([])

    const fetchDrinks = useCallback(async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        const {drinks} = data;
        if(drinks) {
          const newSoda = drinks.map((item) => {
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });

          setSodas(newSoda);
        } else {
          setSodas([])
        }
        setLoading(false);
      } catch(error) {
        console.log(error);
      }
    }, [searchTerm]);


    useEffect(() => {
      fetchDrinks();
    }, [searchTerm, fetchDrinks]);

  return <AppContext.Provider value={{
    loading, searchTerm, sodas, setSearchTerm
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }