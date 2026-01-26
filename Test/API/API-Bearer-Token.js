import http from 'k6/http';
import { cloneElement } from 'react';

/*
getting the Bearer Access-token from the Private URL.
*/

export default function(){

    const credentials = {
        username: 'test_' + Date.now(), // this will add the current TimeStamp at the end of username and it will generate new users for each mili second.
        password: 'test' + Date.now()
    };


    http.post('https://test-api.k6.io/user/register/', 

    JSON.stringify(credentials), 
    {
        headers: {
        'Content-Type':'application/json'
        }
    })



    let res = http.post('https://test-api.k6.io/auth/token/login/', 
        
    JSON.stringify({

        username: credentials.username,
        password: credentials.password
        
    }), 
    {
        headers:{
        'Content-Type':'application/json'
    }
    })

    console.log(res.status)
    const token = res.json().access
    console.log(token)

    
    http.get(
    'https://test-api.k6.io/my/crocodiles/', 
    {
        headers:{
            Authorization: 'Bearer ' + token
        }
    }
)
}

