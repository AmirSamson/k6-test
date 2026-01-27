import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // virtual users
  duration: '10s',
};

export default function () {
  let res = http.get('https://test-api.k6.io');
  sleep(1) // this means that each request/iteration will wait for 1 second, after been executed. to mimic real user's behavior
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
