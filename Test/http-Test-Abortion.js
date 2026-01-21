import { sleep } from 'k6';
import http from 'k6/http';
import exec from 'k6/execution'

/*README:
if the URL is not responding, we need to have a way of aborting/terminating the test by its own to reduce the resource usages.
this is don through using 'exec' method from 'execution' lib from k6. in the setup funtion.

will get an error in the logs: 
"ERRO[0003] test aborted: The address for "home-page" is not responding. Aborting test..."
*/

export let options ={
    vus: 1,
    duration: '5s'
}

// defining a var called 'res' for the http.get method:
export function setup(){
    let res = http.get('https://test.k6.local/home-page')
    //putting an if condition so that if error is risen, then abort the test:
    if (res.error){
        exec.test.abort('The address for "home-page" is not responding. Aborting test...')
    }
}

export default function (){
    http.get('https://test.k6.local/some-page') //this address does not exist.
    sleep(1)
}