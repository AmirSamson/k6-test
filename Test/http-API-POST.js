import http from 'k6/http';

/*
Also when we don't know the response of a URL we can use the following flag in the Terminal to access the response: 

    > K6 run --http-debug="full" {name of the test file}

*/

const credentials = {
    username: 'test_' + Date.now(), // this will add the current TimeStamp at the end of username and it will generate new users for each mili second.
    password: 'test'
};

export default function(){
    http.post('https://test-api.k6.io/user/register/', 

    JSON.stringify(credentials), 
    {
        headers: {
        'Content-Type':'application/json'
        }
    })
}