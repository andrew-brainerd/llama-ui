import { path } from 'ramda';
import { client, GIPHY_API_KEY } from './tools';

export const getRandomGIF = async (tag = 'llama') => {
  const response = await client.get(`/random?api_key=${GIPHY_API_KEY}&tag=${tag}}`);
  console.log(response);
  return path(['data', 'data'], response);
};
