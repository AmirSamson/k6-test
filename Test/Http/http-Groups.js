import http from 'k6/http';
import { sleep, group, check } from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<250'],
        'group_duration{group:::Main page}': ['p(95)<200'], // this is a threshold for the group. each group name is prefixed by a ':'
        // so that is why we added two extra ':' after group tag inside {}.
        // {group:::Main page}
        'group_duration{group:::Main page::Assests}': ['p(95)<200'],
    }
}

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

    sleep(1);
}
