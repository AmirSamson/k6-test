# k6-test (JS)
This repository is for tests that I have wrote in JavaScript format, using k6.
<br>
Read the followings for clues on the Methods and functions used in this Repo:

## Project Structure

This project organizes k6 performance tests by **test responsibility and type** to keep the codebase clean, reusable, and easy to scale.

### Folder Overview

* **/Test/API/**
  Contains tests focused on **API-level behavior**, such as business endpoints, authentication flows, and data validation scenarios.

* **Test/Http/**
  Includes tests that validate **HTTP calls and methods** (GET, POST, PUT, DELETE, etc.), focusing on request/response behavior rather than full scenarios.

* **Test/Scenario/**
  Holds complete **performance scenarios**, including:

  * Smoke tests
  * Load tests
  * Spike tests
  * Stress / Soak tests
    Each scenario type is grouped in its own subfolder.

* **Models/**
  Contains reusable **data models** (e.g. `user.js`) used across tests to standardize request payloads and test data.

---

### Project Map

```text
.
├── API/
│   ├── POST.api.js
│   ├── Post-users.api.js
│   └── API-Bearer-Token.api.js
│
├── Http/
│   ├── http-get.js
│   ├── http-Custom-Metric.js
│   ├── http-Tags.js
│   └── http-Assertion.js
│
├── Scenario/
│   ├── smoke/
│   │   └── login.smoke.js
│   ├── load/
│   │   └── checkout.load.js
│   ├── spike/
│   │   └── search.spike.js
│   └── stress/
│       └── payments.stress.js
│
├── Models/
│   └── user.js
│
└── README.md
```

---

### Running Tests

Each test is executed by pointing `k6 run` to the desired file:

```bash
k6 run Scenario/smoke/login.smoke.js
k6 run API/users.api.js
k6 run Http/get.http.js
```

---

## INSTRUCTIONs for methods:
Below is the descriptions and instructions for Methods I used in this project.

------

### Sleep:

`sleep(1)` 

This means that each request/iteration will wait for 1 second, after been executed. to mimic real user's behavior

------

### Tags:
Tags are really useful when it comes to distinguishing the results from each other.

The only way we can add tags in Thresholds is to put them in between single Quotes:
```
'http_request_duration{status:200}': ['p(95)<1000']
```

so that there is no JavaScript syntax error.
i.e. thresholds can be tagged so that we see different results for each:

```
    thresholds:{
        http_request_duration: ['p(95)<1000'],

        'http_request_duration{status:200}': ['p(95)<1000'], 
                // the {status:200} is a tag to that address which returns a 200. 

        'http_request_duration{status:201}': ['p(95)<1000'] 
                // the {status:200} is a tag to that address which returns a 201. 
    }

```
------

### Checks:
The Check function will have a Value (which here is 'true') and an Object which is set to the Value we gave it. 
so here the Value is 'true' and the Object = 'value' is expected to be true.    i.e. (value) => value === true
we can set it to flase and check if the Object is false or not:

```
   check(res,{
        'Status is 200': (r) => r.status === 200,
            // now, if we wanted to check the page for a certain Text, we can also use check and assert that text.
            // simply we will equal the 'r.body.includes' to include that desired text. 


        'This page is start page': (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
            // now this will check the K6.io page for this text.
    })
```

------

### Different stages in K6:
in K6 there are 4 stages in each test:

1. Init Stage
2. Setup Stage
3. Code Stage/VU stage
4. Teardown Stage

each stage will be launched in order to run the test script.
In 1st step: init stage we are importing modules (http request, etc.)
and also the Option variable and K6 uses that. 
In the Setup stage some advanced http calls is used or API calls. we are waiting there and the rest of the test will not start.

```
export let options ={
    vus: 1,
    duration: '5s'
}

console.log('-- init stage --')

export function setup(){
    console.log('-- setup stage --')
    sleep(5)

        // here we wanted to show that K6 will take 'data' and put it in the default function (vu stage) as an argument.
        // that is why we see that in the results as: 

                // INFO[0009] -- VU stage --                                source=console
                // INFO[0010] {"foo":"bar"}  
        
    const data = {foo: 'bar'}
    return data;
}

export default function (data){
    console.log('-- VU stage --')
    sleep(1)
    console.log(data)
}

export function teardown(){
    console.log('-- teardown stage --')
}

```

------

### Groups (for related URLs):
The whole concept of groups is for using it for addresses which are related and we want them to be requested relatively at the same time. so we use Gropus in the default function:

```
export default function () {

    group('Main page', function () {  // main group and the following will be a sub-group
        let res = http.get('https://test.k6.io/');
        check(res, { 'status is 200': (r) => r.status === 200 });
    
        group('Assets', function () { //now this is a sub-group
            http.get('https://test.k6.io/static/css/site.css');
            http.get('https://test.k6.io/static/js/prisms.js');
        });
    });

    group('News page', function () {
        http.get('https://test.k6.io/news.php');
    });
}
```

And we can also use groups as for distinguishing the results for Thresholds:

```
    thresholds: {
        http_req_duration: ['p(95)<250'],
        'group_duration{group:::Main page}': ['p(95)<200'], 
        
                // this is a threshold for the group. each group name is prefixed by a ':'
                // so that is why we added two extra ':' after group tag inside {}.
                // {group:::Main page}

        'group_duration{group:::Main page::Assests}': ['p(95)<200'],
    }
```
-----

### Test Abortion:
if the URL is not responding, we need to have a way of aborting/terminating the test by its own to reduce the resource usages.
this is don through using 'exec' method from 'execution' lib from k6. in the setup funtion.

will get an error in the logs: 

```
"ERRO[0003] test aborted: The address for "home-page" is not responding. Aborting test..."
```
------

### Setting BASE URL:
If  we want to put the BASE URL variable inside the address in order to be able to make it dynamic in the test. 
now the only thing is to first add this:
    "__ENV.BASE_URL"
on the base URL of the address and then use the following command in termianl to set the BASE URL:

```
> k6 run -e BASE_URL=https://test.k6.io {FILE_NAME}.js
```

------

### Random sleeps (RandomIntBetween(min,max)):

Using the following libarary, we can insert random sleeps for requests so that they feel as normal users behavior:

import {randomIntBetween} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

and in the export default function we use it as:

```
export default function () {

    http.get('URL')
    sleep(randomIntBetween(2,6));
}
```

-------

