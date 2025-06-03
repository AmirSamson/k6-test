import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 5,
  duration: '20s',
};

export default function () {
  let url = 'https://test-api.k6.io/login';
  let payload = JSON.stringify({
    username: 'test_user',
    password: 'secret123',
  });

  let params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let res = http.post(url, payload, params);

  check(res, {
    'login succeeded': (r) => r.status === 200,
  });
}
