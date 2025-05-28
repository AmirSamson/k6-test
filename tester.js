import http from 'k6/http';
import { sleep } from 'k6';


export const options={
    timeUnit: "1s",
    stages: [
        {duration: "10s", target: 10},
        {duration: "10s", target: 20},{duration: "10s", target: 30},
        {duration: "10s", target: 50},{duration: "10s", target: 30},
        {duration: "10s", target: 20},{duration: "10s", target: 10},
        {duration: "10s", target: 0},
    ],
};
export default function() {
    const res = http.get('https://test.k6.io');
    check(res,{'status is 200': (r) => r.status == 200})
    sleep(10);
}