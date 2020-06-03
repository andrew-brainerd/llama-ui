import {
  LOADING_IMAGE,
  IMAGE_LOADED
} from '../actions/images';

export const initialState = {
  isLoadingImage: false,
  image: null
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_IMAGE:
      return {
        ...state,
        isLoadingImage: true,
        image: null
      };
    case IMAGE_LOADED:
      return {
        ...state,
        isLoadingImage: false,
        image: action.image
      };
    default:
      return state;
  }
};

export default map;
