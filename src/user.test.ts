import { SharedArray } from 'k6/data';
import { sleep } from 'k6';
import http from 'k6/http';

const data = new SharedArray('users', function () { //there is a string (name of the SharedArray) and a function in SharedArray.
  const amir = JSON.parse(open('./users.json'));
  return amir; 
});

export default () => {
  const randomUser = data[Math.floor(Math.random() * data.length)];
  console.log(`${randomUser.username}, ${randomUser.password}`);
  http.get('https://')
  sleep(3);
};