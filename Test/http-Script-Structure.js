import { sleep } from 'k6';
import http from 'k6/http';

/*README:
in K6 there are 4 stages in each test.

1. Init Stage
2. Setup Stage
3. Code Stage/VU stage
4. Teardown Stage

each stage will be launched in order to run the test script.
In 1st step: init stage we are importing modules (http request, etc.)
and also the Option variable and K6 uses that. 

In the Setup stage some advanced http calls is used or API calls. we are waiting there and the rest of the test will not start.
*/

export let options ={
    vus: 1,
    duration: '5s'
}

console.log('-- init stage --')

export function setup(){
    console.log('-- setup stage --')
    sleep(5)

    // here we wanted to shwo that K6 will take 'data' and put it in the default function (vu stage) as an argument.
    // that is why we see that in the results as: 

    // INFO[0009] -- VU stage --                                source=console
    // INFO[0010] {"foo":"bar"}  
    
    const data = {foo: 'bar'}
    return data;
}

export default function (data){
    console.log('-- VU stage --')
    sleep(1)
    console.log(data)
}

export function teardown(){
    console.log('-- teardown stage --')
}