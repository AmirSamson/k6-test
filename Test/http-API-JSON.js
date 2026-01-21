import http from 'k6/http';
import {check} from 'k6';

/*in this file we are using 'json()' as a parser for JSON files from API responses.
this method will enable us to parse a JSON and use it in order to check for certain stuff inside the API response.*/

export default function(){
    let res = http.get('https://test-api.k6.io/public/crocodiles')
    res = http.get('https://test-api.k6.io/public/crocodiles/7/')

    check(res, {
        'checked status is 200': (r) => r.status===200,
        'name is Sobek': (r) => r.json().name === 'Sobek'
    })
}