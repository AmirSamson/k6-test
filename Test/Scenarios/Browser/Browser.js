import {browser} from 'k6/browser';

export const options={
    scenarios:{
        ui: {
            executer:'shared-iterations',
            options:{
                browser:{
                    type:'chromium',
                },
            },
        },
    }
}

export default function(){
    const page = browser.newPage()
    page.goto('https://test.k6.io/my_messages.php')
}