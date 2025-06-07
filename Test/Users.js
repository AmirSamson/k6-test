import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const users = new SharedArray('user data', function () {
  return JSON.parse(open('./users.json'));
});

export let options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const user = users[0]; // only one user

  const payload = JSON.stringify({
    username: user.username,
    password: user.password,
  });

  const res = http.post('https://dummyjson.com/auth/login', payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(`Status: ${res.status}`);
  console.log(`Body: ${res.body}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'token received': (r) => r.json('token') !== undefined,
  });

  sleep(1);
}
