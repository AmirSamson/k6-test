import http from 'k6/http';
import { check } from 'k6';

export default function(){
    const res = http.get('https://test.k6.io')

    // the Check function will have a Value (which here is 'true') and an Object which is set to the Value we gave it. 
    // so here the Value is 'true' and the Object = 'value' is expected to be true.    i.e. (value) => value === true
    // we can set it to flase and check if the Object is false or not. 
     
    check(true, {
        'true is true': (value) => value === true
    }),

    // this will check if the status code is 200. object has a function which takes 'r' 
    // and in return r will check the response body to have status of 200. ->  (r) => r.status === 200
    check(res,{
        'Status is 200': (r) => r.status === 200,

            // now, if we wanted to check the page for a certain Text, we can also use check and assert that text.
            // simply we will equal the 'r.body.includes' to include that desired text. 
        'This page is start page': (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
            // now this will check the K6.io page for this text.
    })
}