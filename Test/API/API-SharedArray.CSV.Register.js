import http from 'k6/http';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const usersCrednetials = new SharedArray('Users with Credentials', function(){
    return papaparse.parse(open('../../Data/users.csv'), {header: true}).data
                         // we use "headers: true" because we have there is a name of each column.
})

export default function(){
    usersCrednetials.forEach((item)=>{

        const Credentials = {
            username: item.username,
            password: item.password
        }

        let res = http.get('')

        check(res, {
            'Status is 201': (r)=> r.status === 201
        })
    })
}