/*
This is a breakpoint test. in order
to test the limits of the server in
next environment.
*/

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
                {
                    duration: '2h',
                    target: 19e4,
                },
            ],
        },
    },
    

    thresholds: {
    
        iteration_duration: [ 
         {
           threshold: 'avg < 5000', 
           abortOnFail: true, 
           delayAbortEval: '10s', 
          },
        ],
      },
};

export default function() {
    http.get('https://services-next.rivalarium.com/api/v1/game');
};