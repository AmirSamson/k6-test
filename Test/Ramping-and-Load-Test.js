import http from 'k6/http';
import { check } from 'k6';

export let options = {
  scenarios: {
    ramping_load_test: {
      executor: 'ramping-vus',
      startVUs: 0,                       // we start with 0 VUs in the first place.
      stages: [
        { duration: '30s', target: 20 }, // ramp-up to 20 VUs.
        { duration: '1m', target: 20 },  // holding the ramped up VUs requests.
        { duration: '30s', target: 0 },  // ramping down the ramp ups to "0".
      ],
    },
  },
  thresholds: {
    http_req_duration: [
      'p(90)<400',                       // 90% of requests < 400ms
      'p(99)<1000',                      // 99% < 1s
    ],
    'http_req_failed': ['rate<0.01'],    // <1% errors
    'checks': ['rate>0.95'],             // 95% of checks must pass
  },
};

export default function () {
  let res = http.get('https://test-api.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
