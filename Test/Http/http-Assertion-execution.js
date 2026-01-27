import http from 'k6/http';
import { check } from 'k6';
import exec from 'k6/execution';

/*
Say we want to haywire with only one requests (iteration), for this will use the following method in the http.get():
    http.get('https://test.k6.io' + (exec.scenario.iterationInTest === 1 ? 'foo': '' )) 
that means that only for 1 iteration we will request to https://test.k6.io/foo URL which is wrong. 
so K6 will show that wrong iteration in results.
*/

export let options={
    vus:10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<100'],
        http_req_failed: ['rate<0.01'],
        checks: ['rate>=0.98'] // this means that the checks are 98% correct.
    }
}

export default function(){
    const response = http.get('https://test.k6.io' + (exec.scenario.iterationInTest === 1 ? 'foo': '' ))
    // console.log(exec.scenario.iterationInTest) // this will print the number of iterations in this test. 
                                                // for example will have 49 iterations (http requests), it will printed.
    check(response,{
        'status is 200': (r) => r.status === 200,
        'page is startpage': (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
    })
}