import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter, Trend } from 'k6/metrics';

export let options={
    vus:10,
    duration: '10s',
    threshold:{
        response_time_news_page: ['p(95)<150', 'p(99)<200'], // 2. then we will use the name of our custom metrics to put a threshold for it
    }
}

let newsPageResoponseTrend = new Trend('response_time_news_page');

export default function(){
    let response = http.get('https://test.k6.io') 

    check(res,{
        'Site loaded successfully!': (r) => r.status === 200
    })
    sleep(1)

    res = http.get('https://test.k6.io/news.php')
    newsPageResoponseTrend.add(res.timings.duration); 
    // 1. This 'timing.duration' works the same as 'http_req_duration' metric and returns avg, min, max,
    sleep(1)
}