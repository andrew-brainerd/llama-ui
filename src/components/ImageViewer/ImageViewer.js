import React, { useEffect } from 'react';
import { bool, shape, string, func } from 'prop-types';
import useInterval from '../../hooks/useInterval';
import styles from './ImageViewer.module.scss';

const ImageViewer = ({ isLoadingImage, image, loadImage }) => {
  useEffect(() => {
    loadImage();
  }, [loadImage]);

  useInterval(() => {
    loadImage();
  }, 5000);

  useInterval(() => {
    loadImage();
  }, 5000);

  return (
    <div className={styles.imageViewer}>
      <img src={image.url} alt={image.url} />
    </div>
  );
};

ImageViewer.propTypes = {
  isLoadingImage: bool,
  image: shape({
    url: string
  }),
  loadImage: func.isRequired
};

export default ImageViewer;
