import React, { PropsWithChildren, Suspense } from 'react';
import { Link } from 'react-router-dom';

import SearchArea from '../../Features/SearchArea/SearchArea';
import FlexBox from '../FlexBox';

import './Layout.style.scss';
import Loader from '../Loader/Loader';

type LayoutProps = {};

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  return (
    <FlexBox className="cb-page-background" direction="column">
      <div className="header-area">
        <div className="content h-100">
          <div className="logo-to-home-link d-flex jc-space-between ai-center h-100">
            <FlexBox>
              <Link to={'/'} className="header-link">
                Cocktail Book
              </Link>
            </FlexBox>
            <FlexBox gap="3em">
              <SearchArea />
              <Link to={'/favourites'} className="header-link">
                My Favourites
              </Link>
            </FlexBox>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Suspense fallback={<Loader />}>{props.children}</Suspense>
      </div>
    </FlexBox>
  );
};

export default Layout;
