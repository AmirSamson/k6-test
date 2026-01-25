import http from 'k6/http';
import { check } from 'k6';
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

/* README:
In this file we are using the "RandomString" function in order to generate random strings for usernames.
this is helpful when it comes to multiple iterations/requests. 
because using the 'Date.now()' method could only generate usernames for 1 request at a time, not for concurrent requests simultaneously:

        const crocodileIds = crocodiles.map(crocodile => crocodile.id)

now that we have the ids from crocodiles response, we can use this Array of ids in order to generate random ids in the next URL:
    http.get(`https://test-api.k6.io/public/crocodiles/${crocodilesId}/`)
*/


export default function(){
    let res = http.get('https://test-api.k6.io/public/crocodiles')
    const  crocodiles = res.json();
    const crocodileIds = crocodiles.map(crocodile => crocodile.id) // this will return the number of crocodile IDs in res.json()
    // it will help us to use thos IDs in generating random IDs for the URL to get different results.
    const crocodileId = randomItem(crocodileIds)
    
    res = http.get(`https://test-api.k6.io/public/crocodiles/${crocodileId}/`)

    check(res, {
        'checked status is 200': (r) => r.status===200,
        'Crocodile name is correct': (r) => r.json().id === crocodileId
    })
}