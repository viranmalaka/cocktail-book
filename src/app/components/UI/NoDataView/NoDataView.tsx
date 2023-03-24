import React from 'react';

import NoDataImage from '../../../../assets/no-data.svg';

import './NoDataViewStyle.scss';

type NoDataViewProps = {
  text?: string;
  image?: string;
};

const NoDataView = ({ text = 'No Results', image }: NoDataViewProps) => {
  return (
    <div className="cb-no-data-wrapper">
      <div className="no-data-image">
        <img src={image || NoDataImage} alt="No data" />
      </div>
      <div className="no-data-text">{text}</div>
    </div>
  );
};

export default NoDataView;
