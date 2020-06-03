import * as imagesApi from '../api/images';

const PREFIX = 'IMAGES';

export const LOADING_IMAGE = `${PREFIX}/LOADING_IMAGE`;
export const IMAGE_LOADED = `${PREFIX}/IMAGE_LOADED`;

export const loadingImage = { type: LOADING_IMAGE };
export const imageLoaded = image => ({ type: IMAGE_LOADED, image });

export const loadImage = tag => async dispatch => {
  dispatch(loadingImage);
  imagesApi.getRandomGIF(tag).then(
    image => dispatch(imageLoaded(image))
  );
};
