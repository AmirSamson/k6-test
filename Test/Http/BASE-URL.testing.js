import http from 'k6/http';

/*
Now in this file we want to put the BASE URL variable inside the address in order to be able to make it dynamic in the test. better for CI/CD.
now the only thing is to first add this:
    "__ENV.BASE_URL"
on the base URL of the address and then use the following command in termianl to set the BASE URL:

> k6 run -e BASE_URL=https://test.k6.io {name_of_the_file}.js

*/

export default function(){
    http.get(`${__ENV.BASE_URL}/public/crocodiles/`)
}