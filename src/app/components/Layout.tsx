import React, { PropsWithChildren, useState } from 'react';
import './Layout.style.scss';
import { Link, useHistory } from 'react-router-dom';

type LayoutProps = {};

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  return (
    <div className="page-background">
      <div className="header-area">
        <div className="content h-100">
          <div className="logo-to-home-link d-flex jc-space-between ai-center h-100">
            <div className="left">
              <Link to={'/'} className="header-link">
                Home
              </Link>
            </div>
            <div className="right">
              <input value={search} onChange={(e) => setSearch(e.target.value)} />
              <button
                onClick={() => {
                  if (search) {
                    history.push('/search?q=' + search);
                  }
                }}
              >
                Go
              </button>
              <Link to={'/favourite'} className="header-link">
                Favourite
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">{props.children}</div>
    </div>
  );
};

export default Layout;
