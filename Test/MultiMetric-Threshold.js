import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 50,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<500'],

    'http_req_duration{type:home}': ['p(90)<300'],

    'http_req_duration{type:api}': ['avg<400', 'max<1000'],

    'http_req_failed': ['rate<0.01'],

    checks: ['rate>0.97'],
  },
};

export default function () {
  let homeRes = http.get('https://test-api.k6.io/', { tags: { type: 'home' } });
  check(homeRes, { 'home status 200': (r) => r.status === 200 });

  let apiRes = http.get('https://test-api.k6.io/public/crocodiles/', {
    tags: { type: 'api' },
  });
  check(apiRes, {
    'api status 200': (r) => r.status === 200,
    'api content check': (r) => r.body.includes('name'),
  });
}
