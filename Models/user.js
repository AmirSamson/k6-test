import {randomString} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'
export default class User {
    username;
    password;

    constructor(){
        this.username= randomString(8)
        this.password= randomString(8)
    }

    get username(){
        return this.username
    }
    get password(){
        return this.password
    }

}