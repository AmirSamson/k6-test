import http from 'k6/http';
import { sleep } from 'k6';

export let options={
    stages: [
        {   
            duration: '5m',     // Ramp up stage
            target: 100
        },
        {
            duration: '30m',    // Hold stage
            target: 100
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