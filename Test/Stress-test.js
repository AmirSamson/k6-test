import http from 'k6/http';
import { check, sleep } from 'k6';

/*
This is similar to Load-test. however, the Ramp Up is above average conditions. i.e. on load-test file we had '100 vus' for Ramp-up, 
but here we increase it to something around 10-50% which here would be: '150 vus'.
*/
export let options={
    stages: [
        {   
            duration: '5m',     // Ramp up stage
            target: 150
        },
        {
            duration: '30m',    // Hold stage
            target: 150
        },
        {
            duration: '5m',     // Ramp Down
            target: 0
        }
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1);
}