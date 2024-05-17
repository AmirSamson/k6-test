/*
this is a test for threshold's metrics.
thresholds is for checking duration of
response. abortOnFail is for returning
error if response time is below 200ms.
*/

import http from 'k6/http';
import { Options } from 'k6/options';

export const options:Options = {
  thresholds: {
    
    iteration_duration: [ 
     {
       threshold: 'avg < 200', 
       abortOnFail: true, 
       delayAbortEval: '10s', 
      },
    ],
  },
  
};


export default function () {
    http.get('https://dev.rivalarium.com/');
}