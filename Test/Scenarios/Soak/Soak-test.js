import http from 'k6/http';
import { check, sleep } from 'k6';

/*
The goal here is to put the application under load for a long period of time. if the Load test was successful for 1 hour,
then the Soak Test will be performed for a longer period as 8-16 hr.

Vus
^       ____________________
|      /                    \
|     /                      \
|    /                        \
|   /                          \
|  /                            \
| /                              \
|/                                \
----------------------------------------> Time

*/
export let options={
    stages: [
        {   
            duration: '10m',     // Ramp up stage
            target: 100
        },
        {
            duration: '8h',    // Hold stage will be longer --> 8 - 24 hours
            target: 100
        },
        {
            duration: '10m',     // Ramp Down
            target: 0
        }
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1);
}