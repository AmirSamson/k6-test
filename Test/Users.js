import http from 'k6/http';
import {SharedArray}  from 'k6/data';
import { check, sleep } from 'k6';

/**
 * this test is for using a shared Array and reading and opening a JSON file of users
 * in order to use them for request on a website. 
 */
const users = new SharedArray('user data', function(){
    return JSON.parse(open('./users.json'));
});

export let options = {
    vus: 10,
    duration: '7s',
}

export default function () {
  const user = users[Math.floor(Math.random() * users.length)];

  const res = http.post('https://dummyjson.com/auth/login', JSON.stringify({
    username: user.username,
    password: user.password,
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'received token': (r) => r.json('token') !== undefined,
  });
  console.log(`Token received: ${res.json('token')}`);

  sleep(1);
}