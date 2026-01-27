import http from 'k6/http';
import { check } from 'k6';
import {SharedArray} from 'k6/data'; 

/* README:
In this file we use the concept of Shared Array in order to use a set of users in the user.json file and Login each one of them.
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

        let res = http.post(
            
            'https://test-api.k6.io/auth/token/login/', 
            
            JSON.stringify(credentials), 

            {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )

        check(res, {
            'Status is 200': (r) => r.status===200
        });
        
    })
}