import http from 'k6/http';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

/* README:
In this file we are using the "RandomItem(Array)" function in order to generate random list of items in a list/array.
this is helpful when it comes to multiple iterations/requests. 
Because, we would need some randomness in getting the ids from the endpoint. 
Here we will be using ".map" method which allows us to go item by item in a parsed request and return something for us.
here we would need the crocodile ids. so we use crocodiles.map() to return IDs inside crocodile endpoint.
*/

export const options ={
    vus: 1,
    duration: '5s'
};

export default function(){
        
    const credentials = {
        username: randomString(8),
        password: randomString(8)
    }

    http.get(
        
        'https://test-api.k6.io/user/register/', 
        
        JSON.stringify(credentials), 

        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    )
}