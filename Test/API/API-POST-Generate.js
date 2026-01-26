import { check } from 'k6';
import http from 'k6/http';
/*
getting the Bearer Access-token from the Private URL.
*/


export default function(){

    const credentials = {
        username: 'test_' + Date.now(), 
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

    resp = http.post(
        'https://test-api.k6.io/my/crocodiles/', 
        
        JSON.stringify(
            {
            name: 'Rand-Crocodile',
            sex: 'M',
            date_of_birth: '1900-10-11'
            }
        ),
        {
            headers:
            {
                Authorization: 'Bearer ' + token,
                'Content-Type':'application/json'
            }
        }
    )
    const newCrocID = resp.json().id

    http.get(
        `https://test-api.k6.io/my/crocodiles/${newCrocID}/`, 
        {
            headers:
            {
                Authorization: 'Bearer ' + token,
            }
        }
    )

    check(res, {
        'Status is 200!': (r) => r.status ===200,
        'Croc ID is returning correctly': (r) => r.json().id = newCrocID
    })

    // A delete HTTP request:
    
    http.del(
        `https://test-api.k6.io/my/crocodiles/${newCrocID}/`, 
        null,
        {
            headers:
            {
                Authorization: 'Bearer ' + token,
            }
        }
    )
    
}

    