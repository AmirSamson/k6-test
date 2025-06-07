import http from 'k6/http';
import {SharedArray}  from 'k6/data';
import { check, sleep } from 'k6';

const userData = new SharedArray('users', function(){
    return JSON.parse(open('./src/users.json'));
});

export let options = {
    vus: 10,
    duration: '13s',
}

export default function() {
    const RandomUser = data[Math.floor(Math.random() * data.length)];
    console.log(`Testing login for: ${user.username}`);
    
    let res = http.post('https://example.com/login', JSON.stringify({
        username: user.username,
        password: user.password,
    }), {
        headers: { 'Content-Type': 'application/json' },
    });

    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}