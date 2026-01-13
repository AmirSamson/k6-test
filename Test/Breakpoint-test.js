import http from 'k6/http';
import { check, sleep } from 'k6';

/*
The test has no time limit, we need to watch when the application has the most Error Rate or Response Time is unacceptable or the app is crashed.
then we manually stop the test and write the number of users that the app handled.

Vus
^
|      /
|     /  
|    /    
|   /      
|  /        
| /          
|/------------> Time

*/

export let options={
    stages: [
        {   
            duration: '2h',     // Ramp up stage
            target: 10000
        },
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1);
}