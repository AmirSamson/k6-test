import http from 'k6/http';
import { check } from 'k6';
import { Counter, Trend } from 'k6/metrics';

let loginDuration = new Trend('login_duration');
let myCounter = new Counter('my_Counter')

export let options = {
  vus: 20,
  duration: '45s',
  thresholds: {
    login_duration: ['p(95)<300'], 
    checks: ['rate>0.98'],
    loginDuration: ['max<400'],
    myCounter: ['count>10']
  },
};

export default function () {
  let res = http.post('https://test-api.k6.io/login', JSON.stringify({
    username: 'test_user',
    password: 'secret123',
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  loginDuration.add(res.timings.duration);
  myCounter.add(1)

  check(res, {
    'logged in': (r) => r.status === 200,
  });
}
