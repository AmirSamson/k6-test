import http from 'k6/http';

export let options ={
    thresholds:{
        http_request_duration: ['p(95)<1000'],
        'http_request_duration{status:200}': ['p(95)<1000'] // the {status:200} is a tag to that address which returns a 200. 
    }
}

export default function(){
    http.get('')
    http.get('')
}