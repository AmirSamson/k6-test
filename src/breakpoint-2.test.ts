/*
This is a breakpoint test. in order to test the limits of the server.
Stages are added and they start from one to the twelfth stage. There 
is a threshold to check http-requests-failed and it checks the failed
requests with the threshold of 5%. The test finishes if the target is
met or if the failed requests breaches 5% of the whole requests.
*/

import { check } from 'k6';
import http from 'k6/http';
import { Options } from 'k6/options';

export const options: Options = {
    scenarios: { 
        ramping_arrival_rate: { 
            executor: 'ramping-arrival-rate',
            startRate: 10,
            timeUnit: '1s',
            preAllocatedVUs: 10,
            maxVUs: 2e5,
            stages: [
                { duration: '10m', target: 15e3 },
                { duration: '10m', target: 30e3 },
                { duration: '10m', target: 45e3 },
                { duration: '10m', target: 60e3 },
                { duration: '10m', target: 75e3 },
                { duration: '10m', target: 95e3 },
                { duration: '10m', target: 105e3 },
                { duration: '10m', target: 120e3 },
                { duration: '10m', target: 135e3 },
                { duration: '10m', target: 150e3 },
                { duration: '10m', target: 165e3 },
                { duration: '10m', target: 180e3 },

            ],
        },
    },
    
    thresholds: {
        http_req_failed: [
            {
                threshold:'rate<0.05',
                abortOnFail: true, 
            }
        ],
      },
};
export default function(){
   const res= http.get('https://services-next.rivalarium.com/api/v1/game');
   check(res,{'status is 200': (r) => r.status == 200})
}
