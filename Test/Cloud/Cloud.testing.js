import http from 'k6/http';
import {check, sleep} from 'k6';

/* README:
For accessing your K6.cloud and running tests on it you need to login first with the terminal. 
First we need to go to K6 Cloud website, then go to Settings/Personal API Token 
Copy the Token value, 
Then come to the VScode terminal and using this command: 

    > K6 login cloud --token #TOKEN

After this, You are logged in.
for running tests on Cloud we use this command:
    > k6 cloud {name_of_your_file}

Now Every time you want to run a test in a different Project you need to add "ext" on options, 
then add "loadimpact" then add the Project ID from the K6.Cloud website and paste it in front of "ProjectID"
Use the followign command in Terminal to run the test on your desitred project:

    > k6 run {name_of_file} -o cloud
    or
    > K6 cloud {name_of_file}
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
    
    let resp = http.get('https://test.k6.io')

    check(resp, {
        'status is 200!': (r)=> r.status === 200
    })
    
    sleep(0.3)
}