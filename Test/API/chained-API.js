import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  let loginRes = http.post('https://test-api.k6.io/login', JSON.stringify({
    username: 'test_user',
    password: 'secret123',
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(loginRes, { 'login success': (r) => r.status === 200 });

  let token = loginRes.json('token');

  let authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let userData = http.get('https://test-api.k6.io/my-profile', authHeaders);

  check(userData, {
    'profile loaded': (r) => r.status === 200,
  });
}
