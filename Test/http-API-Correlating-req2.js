import http from 'k6/http';
import {check} from 'k6';

/*
if we want not to "Hard Code" the IDs we can use the same response and then use the data from the response in the checks:
*/

export default function(){
    let res = http.get('https://test-api.k6.io/public/crocodiles')
    // we use the above request to get the response and parse it into JSON then use it to define variables to put into the URL and checks:
    const  crocodiles = res.json();
    const crocodilesId = crocodiles[0].id;
    const crocodilesName = crocodiles[0].name;

    res = http.get(`https://test-api.k6.io/public/crocodiles/${crocodilesId}/`)
    // this is how we can access different keys in the Response Headers. the following is the way for different key names:
    console.log(res.headers.Allow)
    console.log(res.headers['Content-Type'])

    check(res, {
        'checked status is 200': (r) => r.status===200,
        'Crocodile name is correct': (r) => r.json().name === `${crocodilesName}`
    })
}