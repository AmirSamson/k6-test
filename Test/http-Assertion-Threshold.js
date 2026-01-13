import http from 'k6/http';
import { check } from 'k6';

export let options={
    vus:10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<100']
    }
}

export default function(){
    const response = http.get('https://test.k6.io')
    check(response,{
        'status is 200': (r) => r.status === 200,
        'page is startpage': (r) => r.body.includes('')
    })
}