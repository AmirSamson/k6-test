/*
this is a smoke test.
*/

import { check } from 'k6';
import http from 'k6/http';
import { Options } from 'k6/options';

export const Option: Options ={
    vus :5,
    duration:'10s',
    thresholds: {
      
    },
};



export default function() {
    const res = http.get('https://dev.rivalarium.com/');
     check(res, {
       'Is status 200': (r) => r.status == 200, //this shows that the response is returning 200 code
        
      });
}