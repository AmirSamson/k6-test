import http from 'k6/http';
import { check } from 'k6';
import {SharedArray} from 'k6/data'; 

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