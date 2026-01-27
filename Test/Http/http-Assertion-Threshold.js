import http from 'k6/http';
import { check } from 'k6';

export let options={
    vus:10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<100'], // This means that 95% of the requests should be under 100 miliseconds
        http_req_duration:['max<200'], //this means that the maximum request time should be under 2000 miliseconds.
        http_req_failed: ['rate<0.01'], //this means that the 'failed rate' should be less 1%.
        http_req: ['count>20'], //it means that we expect that the Requests to be greater than 20.
        http_req: ['rate>4'], // it means that we expect that the request are sent more than 4 requests per Second.
    }
}

export default function(){
    const response = http.get('https://test.k6.io')
    check(response,{
        'status is 200': (r) => r.status === 200,
        'page is startpage': (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
    })
}