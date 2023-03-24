import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Search from './Search';
import Favourites from './Favourites';
import Layout from '../app/components/UI/MainLayout/Layout';
import CocktailDetails from './CocktailDetails';
import ErrorPage from './error-page';

const Index = () => {
  return (
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
        <Route path="/cocktail/:id">
          <CocktailDetails />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Index;
