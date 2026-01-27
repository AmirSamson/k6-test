import http from 'k6/http';
import {check, sleep} from 'k6';

/* README:
For accessing your K6.cloud and running tests on it you need to login first with the terminal, using this command: 

    > K6 login cloud --token


*/

export let options = {
    vus: 1,
    duration: '5s',
    ext:{
        loadimpact:{        
                        // name of the company who developed K6, before Grafana bought K6 .
            projectID: 3636152  
                        // create a new project on K6 Cloud website, and copy the project ID and paste here so that results goes to there.
        }
    }
}

export default function(){
    let resp = http.get()
    check(resp, {
        'status is 200!': (r)=> r.status === 200
    })
    sleep(0.3)
}