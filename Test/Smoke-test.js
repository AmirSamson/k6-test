import http from 'k6/http';
import { check, sleep } from 'k6';

export let options={
    vus: 1,
    duration: '10s'
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1); // this will tell K6 to wait for 1 sec after each request to that URL. to act like a real user. 
    http.get('https://test.k6.io/contacts.php')
    sleep(2)
    http.get('https://test.k6.io/news.php')
    sleep(2)
}
