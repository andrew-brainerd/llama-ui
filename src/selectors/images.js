import { path, pathOr } from 'ramda';

export const getIsLoadingImage = path(['images', 'isLoadingImage']);

export const getCurrentImage = pathOr({}, ['images', 'image', 'images', 'original']);

export const getPrviousMarker = path(['images', 'previousMarker']);
