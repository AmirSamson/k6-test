import http from 'k6/http';
import { check } from 'k6';

export let options = {
  scenarios: {
    ramping_load_test: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 20 }, // ramp-up
        { duration: '1m', target: 20 },  // hold
        { duration: '30s', target: 0 },  // ramp-down
      ],
    },
  },
  thresholds: {
    http_req_duration: [
      'p(90)<400',     // 90% of requests < 400ms
      'p(99)<1000',    // 99% < 1s
    ],
    'http_req_failed': ['rate<0.01'], // <1% errors
    'checks': ['rate>0.95'],          // 95% of checks must pass
  },
};

export default function () {
  let res = http.get('https://test-api.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
