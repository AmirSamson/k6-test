import http from 'k6/http';

/*
Also when we don't know the response of a URL we can use the following flag in the Terminal to access the response: 

    > K6 run --http-debug="full" {name of the test file}

*/

const body = JSON.stringify({
    username: 'test_' + Date.now(), // this will add the current TimeStamp at the end of username and it will generate new users for each mili second.
    password: 'test'
});

const params = {
    headers:{
        'Content-Type':'application/json'
    }
};

export default function(){
    let res = http.post('https://test-api.k6.io/auth/token/login/', body, params)
    console.log(res.status)
    const user = res.json()
    const userToken = user.body.token
    console.log(userToken)
}