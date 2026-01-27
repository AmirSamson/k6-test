import http from 'k6/http';

export let options ={
    thresholds:{
        http_request_duration: ['p(95)<1000'],
        'http_request_duration{status:200}': ['p(95)<1000'], // the {status:200} is a tag to that address which returns a 200. 
        'http_request_duration{status:201}': ['p(95)<1000'] // the {status:200} is a tag to that address which returns a 201. 
    }
}

export default function(){
    http.get(
        'https://run.mocky.io/v3/cef9ccd3-7768-45f4=ab95-d2edd7f90db6'
    )
    http.get(
        'https://run.mocky.io/v3/92e5f30a-4cf5-4f1d-9356-65410053a22e?mocky-delay=200ms'
    ) // this '?mocky-delay=200' will set a delay on API response for running a test.
}