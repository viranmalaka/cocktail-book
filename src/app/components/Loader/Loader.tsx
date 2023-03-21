import React from 'react';
import './Loader.styles.scss';

type LoaderProps = {
  helperText?: string;
};

const Loader = ({ helperText }: LoaderProps) => {
  return (
    <div className="img-loader-container">
      <div className="img-loader" />
      <span className="helper-text">{helperText}</span>
    </div>
  );
};

export default Loader;
