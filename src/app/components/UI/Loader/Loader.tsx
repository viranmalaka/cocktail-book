import React from 'react';

import './Loader.styles.scss';

type LoaderProps = {
  helperText?: string;
};

const Loader = ({ helperText }: LoaderProps) => {
  return (
    <div className="cb-loader-container" data-testid="loader">
      <div className="cb-loader" />
      <span className="cb-loader-helper-text">{helperText}</span>
    </div>
  );
};

export default Loader;
