import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout/Layout';
import SodaDetail from './components/SodaList/SodaDetail/SodaDetail';
import AddSoda from './pages/AddSoda';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <AddSoda />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/soda/:id">
          <SodaDetail/>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Layout>
  );
}

export default App;
