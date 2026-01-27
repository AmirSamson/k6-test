import http from 'k6/http';
import { check, sleep } from 'k6';

/*
The goal here is to increase the vus in a short time then decrease them. so there is no Hold stage.

Vus
^
|      /\
|     /  \
|    /    \
|   /      \
|  /        \
| /          \
|/            \
-------------------> Time

*/
export let options={
    stages: [
        {   
            duration: '2m',     // Ramp up stage
            target: 10000
        },
        {
            duration: '1m',     // Ramp Down
            target: 0
        }
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1);
}