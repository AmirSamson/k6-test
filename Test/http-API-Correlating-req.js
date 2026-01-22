import http from 'k6/http';
import {check} from 'k6';

/*
what if the IDs are changing over time? then we can define variables/consts in order to ask for them in the URL which we're sending a req to.
So, we define a const/var in the default function, then put it as the following in the URL: 

const userId = 10 
http.get('https://test...../' + userId + '/')

or, we can use 'string interpolation' with a backtick: '`' ====> http.get(`https://test..../${userId}/`)

*/

export default function(){
    let res = http.get('https://test-api.k6.io/public/crocodiles')

    const crocodilesId = 7;
    res = http.get('https://test-api.k6.io/public/crocodiles/' + userId + '/')

    check(res, {
        'checked status is 200': (r) => r.status===200,
        'name is Sobek': (r) => r.json().name === 'Sobek'
    })

        const userId = 10;
    resp = http.get(`https://test-api.k6.io/public/crocodiles/${userId}/`)

    check(resp, {
        'checked status is 200': (r) => r.status===200,
        'name is Sobek': (r) => r.json().name === 'Sobek'
    })
}