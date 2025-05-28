import http from 'k6/http';
import { Options } from 'k6/options';

export const options: Options = {
  vus: 5,
  duration: '2s'
};

export default () => {
  http.get('https://dev.rivalarium.com');
};