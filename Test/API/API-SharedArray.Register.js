import http from 'k6/http';
import { check } from 'k6';
import {SharedArray} from 'k6/data'; 

/* README:
In this file we use the concept of Shared Array in order to use a set of users in the user.json file and register each one of them.
Then we will use them in the "API-SharedArray.Register.js" file and Login with them.
*/

const usersCrednetials = new SharedArray ('Users with Credentials', function(){
    return JSON.parse(open('../../data/users.json')).users
});

export default function(){

    usersCrednetials.forEach((item)=>{

        const credentials = {
            username: item.username,
            password: item.password
        }

        let res = http.get(
            
            'https://test-api.k6.io/user/register/', 
            
            JSON.stringify(credentials), 

            {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )

        check(res, {
            'Status is 201': (r) => r.status===201
        });
        
    })
}