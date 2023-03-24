import React, { useState } from 'react';

import Loader from '../Loader/Loader';

import './ImageLoader.styles.scss';

type ImageLoaderType = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  wrapperClass?: string;
};

const ImageLoader = ({ wrapperClass, alt, ...props }: ImageLoaderType) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`cb-image-loader ${wrapperClass || ''}`}>
      <img {...props} alt={alt} onLoad={() => setLoaded(true)} style={{ display: loaded ? 'inline' : 'none' }} />
      {!loaded && <Loader />}
    </div>
  );
};

export default ImageLoader;
