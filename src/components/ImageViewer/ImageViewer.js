import React, { useEffect } from 'react';
import { bool, shape, string, func } from 'prop-types';
import Button from '@llamasoft/ui-button';
import styles from './ImageViewer.module.scss';

const ImageViewer = ({ isLoadingImage, image, loadImage }) => {
  useEffect(() => {
    loadImage();
  }, [loadImage]);

  return (
    <>
      <div className={styles.imageViewer}>
        {image.url && <img src={image.url} alt={image.url} />}
      </div>
      <div className={styles.viewerControls}>
        <Button
          className={styles.randomizeButton}
          qaId={'RandomizeLLama_ButtonQAId'}
          onClick={() => loadImage()}
        >
          Randomize
        </Button>
      </div>
    </>
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
