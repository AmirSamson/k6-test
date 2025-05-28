import http from 'k6/http';
import { check } from 'k6';

export let options= {
    vus: 5,
    duration: '10s'
};

export default () => {
   const res=http.get('https://dev.rivalarium.com');
   check(res, {
    'status = 200': (r) => r.status == 200
   });
   
};