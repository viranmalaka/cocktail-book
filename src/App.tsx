import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Layout from './app/components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
