import http from 'k6/http';
import { sleep } from 'k6';

export const options={
    timeUnit: "1s",
    stages: [
        { duration: "10s", target: 10 },
        { duration: "5s", target: 10 },
        { duration: "20s", target: 49 }, 
        { duration: "10", target: 10 },
        { duration: "10s", target: 0 },
      ],
};
export default function () {
 const res = http.get('https://test.k6.io');
  check(res,{'status is 200': (r) => r.status == 200})
  sleep(10);
}