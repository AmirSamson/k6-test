import http from 'k6/http';
import {randomIntBetween} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { sleep } from 'k6';

/* README:
This file will use the "RandomIntBetween" function from a library in K6 that will generate random integers.
It will help us to generate random sleeps so that we can mimic the real-world scenario were users wait for diferent amount of time to request.

    Sleep(randomIntBetween(1,5))
*/

export let options={
    vus: 1,
    duration: '5s'
}

export default function(){
    http.get('https://test.k6.io/')
    console.log(' - VU Stage - ')
    sleep(randomIntBetween(2,6)) // This: "randomIntBetween(2,6)", will put random sleeps in between each request,
    //  so that we mimick normal user behavior.
}