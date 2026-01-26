import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 20,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<500'], 
    'checks': ['rate>0.95'],         
  },
};

export default function () {
  let res = http.get('https://test-api.k6.io');
  check(res, 
    { 
      'status is 200': (r) => r.status === 200 
    });
  sleep(1)
}
