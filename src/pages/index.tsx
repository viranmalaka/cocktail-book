import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../app/components/UI/MainLayout/Layout';

const Favourites = lazy(() => import('./Favourites'));
const CocktailDetails = lazy(() => import('./CocktailDetails'));
const ErrorPage = lazy(() => import('./error-page'));
const Home = lazy(() => import('./Home'));
const Search = lazy(() => import('./Search'));

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
