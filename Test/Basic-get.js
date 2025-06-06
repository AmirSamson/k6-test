import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 10, // virtual users
  duration: '30s',
};

export default function () {
  let res = http.get('https://test-api.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
