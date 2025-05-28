// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  group('page_1 - https://rivalarium.com/signin', function () {
    response = http.post(
      'https://otlp.rivalarium.com/v1/traces',
      '{"resourceSpans":[{"resource":{"attributes":[{"key":"service.name","value":{"stringValue":"client-web-next-client"}},{"key":"telemetry.sdk.language","value":{"stringValue":"webjs"}},{"key":"telemetry.sdk.name","value":{"stringValue":"opentelemetry"}},{"key":"telemetry.sdk.version","value":{"stringValue":"1.7.0"}}],"droppedAttributesCount":0},"scopeSpans":[{"scope":{"name":"@opentelemetry/instrumentation-fetch","version":"0.33.0"},"spans":[{"traceId":"8c8ea7dd425061df7e88139bcd4ed540","spanId":"691788ba4cd90b30","name":"GET https://rivalarium.com/_next/static/css/58dfda57fe48bd5c.css","kind":3,"startTimeUnixNano":1681993199693000200,"endTimeUnixNano":1681993199742900200,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/static/css/58dfda57fe48bd5c.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":11147}},{"key":"http.response_content_length_uncompressed","value":{"intValue":48304}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993199694100200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993199694100200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993199694100200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993199694100200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993199694100200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993199694100200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993199708600000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993199728000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993199735000000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"53ab25095f1684b5638cf10efd5efefb","spanId":"2cefd85e968e191e","name":"GET https://rivalarium.com/_next/static/css/3c7bdf96b7a6967b.css","kind":3,"startTimeUnixNano":1681993199694100200,"endTimeUnixNano":1681993199746200000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/static/css/3c7bdf96b7a6967b.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":3666}},{"key":"http.response_content_length_uncompressed","value":{"intValue":21214}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993199695300000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993199695300000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993199695300000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993199695300000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993199695300000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993199695300000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993199710400000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993199729300200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993199737000200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"64434bdc7786ab686ed5b36cba46da0e","spanId":"aa9eed3649ac5a2d","name":"GET https://rivalarium.com/_next/static/css/387b406d5e8bae20.css","kind":3,"startTimeUnixNano":1681993199694999800,"endTimeUnixNano":1681993199747000000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/static/css/387b406d5e8bae20.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":3548}},{"key":"http.response_content_length_uncompressed","value":{"intValue":19797}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993199696200200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993199696200200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993199696200200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993199696200200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993199696200200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993199696200200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993199711000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993199729400000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993199738600200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"ea6ccab5f6c299c8b3864021a7e55870","spanId":"746975c8d5caabd6","name":"GET https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json","kind":3,"startTimeUnixNano":1681993199646500000,"endTimeUnixNano":1681993199806600200,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993199649300200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993199652800000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993199652800000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993199652800000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993199652800000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993199715000000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993199719100200,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993199802600200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993199804200200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0}]}]}]}',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://rivalarium.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(0.6)

    response = http.post(
      'https://services.rivalarium.com/api/v1/google/service/callback',
      '{"error":"Unknown error."}',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'content-type': 'application/json',
          b3: '',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://rivalarium.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(2.1)

    response = http.post(
      'https://services.rivalarium.com/api/v1/user_info/service/get',
      '{"error":"Unknown error."}',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'content-type': 'application/json',
          b3: '',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://rivalarium.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(0.5)

    response = http.request(
      'HEAD',
      'https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/signup.json',
      null,
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'x-nextjs-data': '1',
          b3: '8e171b41d48843dea547431bc42cfde9-1ed9a802072a290f-1',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )

    response = http.post(
      'https://play.google.com/log?hasfast=true&authuser=0&format=json',
      '[[1,null,null,null,null,null,null,null,null,null,[null,null,null,null,"en",null,null,null,null,[3,true,0]]],1112,[["1681993199997",null,[],null,null,null,null,"[\\"GCfd71tjH0y6l5mT2kRbOQ\\",12,false,null,\\"398934752495-nf9nams5ksa10nhp9tmdao4p931jdka0.apps.googleusercontent.com\\",\\"https://rivalarium.com\\",[2],null,null,null,null,null,null,14,null,null,null,[1,1,1,null,1,1,2]]",null,null,12,null,null,null,-12600,null,null,null,null,[],1,null,null,null,null,null,[]],["1681993203484",null,[],null,null,null,null,"[\\"GCfd71tjH0y6l5mT2kRbOQ\\",8,false,null,\\"398934752495-nf9nams5ksa10nhp9tmdao4p931jdka0.apps.googleusercontent.com\\",\\"https://rivalarium.com\\",[2],null,null,null,null,[11,[64,44,16,32],null,null,null,null,null,null,null,null,null,null,null,null,null,null,7],7,3506,null,null,null,[1,1,1,null,1,1,2]]",null,null,8,null,null,null,-12600,null,null,null,null,[],2,null,null,null,null,null,[]]],"1681993208280",[]]',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-platform': '"Windows"',
          'sec-ch-ua-mobile': '?0',
          'content-type': 'text/plain; charset=UTF-8',
          accept: '*/*',
          origin: 'https://accounts.google.com',
          'x-client-data': 'CI22yQEIorbJAQjBtskBCKmdygEImejKAQiTocsBCOOXzQEIhaDNAQi9os0BGMHLzAE=',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )

    response = http.post(
      'https://services.rivalarium.com/api/v1/user_info/service/get',
      '{"error":"Unknown error."}',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'content-type': 'application/json',
          b3: '',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          origin: 'https://rivalarium.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(3.1)

    response = http.request(
      'HEAD',
      'https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json',
      null,
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'x-nextjs-data': '1',
          b3: '728028a4d0730b89277e48442f3f7662-3d64ab3a36b46324-1',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )

    response = http.post(
      'https://otlp.rivalarium.com/v1/traces',
      '{"resourceSpans":[{"resource":{"attributes":[{"key":"service.name","value":{"stringValue":"client-web-next-client"}},{"key":"telemetry.sdk.language","value":{"stringValue":"webjs"}},{"key":"telemetry.sdk.name","value":{"stringValue":"opentelemetry"}},{"key":"telemetry.sdk.version","value":{"stringValue":"1.7.0"}}],"droppedAttributesCount":0},"scopeSpans":[{"scope":{"name":"@opentelemetry/instrumentation-fetch","version":"0.33.0"},"spans":[{"traceId":"63219302f5c436aeb89ee0c6ef516cbc","spanId":"c5b08f84e1a01a24","name":"GET https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json","kind":3,"startTimeUnixNano":1681993206269000000,"endTimeUnixNano":1681993206354200000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993206269700000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993206269700000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993206269700000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993206269700000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993206269700000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993206269700000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993206272000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993206352500200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993206353100000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"b4ce0115f1bf41d792e468c928bfc6f4","spanId":"556b5fdb587bba38","name":"GET https://rivalarium.com/_next/static/css/98da99b1af2bcf34.css","kind":3,"startTimeUnixNano":1681993208097100000,"endTimeUnixNano":1681993208107700200,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/static/css/98da99b1af2bcf34.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2099}},{"key":"http.response_content_length_uncompressed","value":{"intValue":10653}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993208098400000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993208098400000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993208098400000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993208098400000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993208098400000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993208098400000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993208100000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993208100600000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993208101600000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"dbf33af63cda997ec6128ffd61a4aca0","spanId":"766ab8381c794b15","name":"GET https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/signup.json","kind":3,"startTimeUnixNano":1681993208109999900,"endTimeUnixNano":1681993208228300000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/signup.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993208111400200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993208111400200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993208111400200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993208111400200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993208111400200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993208111400200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993208125900000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993208215400200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993208221000200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"8e171b41d48843dea547431bc42cfde9","spanId":"1ed9a802072a290f","name":"HEAD https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/signup.json","kind":3,"startTimeUnixNano":1681993208248000000,"endTimeUnixNano":1681993208358100200,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"HEAD"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/signup.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":0}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993208248500200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993208248500200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993208248500200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993208248500200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993208248500200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993208248500200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993208275100200,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993208356000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993208357000200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"808de893a2aa45bbaf87e04d4dc8891d","spanId":"54fd81866d49f34c","name":"GET https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json","kind":3,"startTimeUnixNano":1681993211151000000,"endTimeUnixNano":1681993211254700000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993211151600000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993211151600000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993211151600000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993211151600000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993211151600000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993211151600000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993211155600100,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993211251700200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993211253200100,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0}]}]}]}',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://rivalarium.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )

    response = http.get('https://rivalarium.com/undefined', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
      },
    })
    sleep(0.9)

    response = http.post(
      'https://app.posthog.com/e/?compression=gzip-js&ip=1&_=1681993212983&ver=1.53.3',
      '',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-platform': '"Windows"',
          'sec-ch-ua-mobile': '?0',
          'content-type': 'text/plain',
          accept: '*/*',
          origin: 'https://rivalarium.com',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
    sleep(3.9)

    response = http.post(
      'https://otlp.rivalarium.com/v1/traces',
      '{"resourceSpans":[{"resource":{"attributes":[{"key":"service.name","value":{"stringValue":"client-web-next-client"}},{"key":"telemetry.sdk.language","value":{"stringValue":"webjs"}},{"key":"telemetry.sdk.name","value":{"stringValue":"opentelemetry"}},{"key":"telemetry.sdk.version","value":{"stringValue":"1.7.0"}}],"droppedAttributesCount":0},"scopeSpans":[{"scope":{"name":"@opentelemetry/instrumentation-fetch","version":"0.33.0"},"spans":[{"traceId":"728028a4d0730b89277e48442f3f7662","spanId":"3d64ab3a36b46324","name":"HEAD https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json","kind":3,"startTimeUnixNano":1681993211431100200,"endTimeUnixNano":1681993211572400000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"HEAD"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/home.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":0}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993211432000000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993211432000000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993211432000000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993211432000000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993211432000000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993211432000000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993211456800000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993211555000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993211565000200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"265be742fa3b19a21726762f29d3f2cd","spanId":"92190e529f43658f","name":"GET https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default.json","kind":3,"startTimeUnixNano":1681993213776000000,"endTimeUnixNano":1681993214553900000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993213777600000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993213777600000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993213777600000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993213777600000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993213777600000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993213777600000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993213812800000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993214293900000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993214530200000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"17f52c9ae81f1e60dd5ae40f1b3c16c7","spanId":"777a0ccbf6396068","name":"GET https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/streams.json","kind":3,"startTimeUnixNano":1681993213779000000,"endTimeUnixNano":1681993214554500000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/streams.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993213780100000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993213780100000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993213780100000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993213780100000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993213780100000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993213780100000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993213819300000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993214294100200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993214530700000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"7283242c67e1d26efbd6daa3a03baf5b","spanId":"c6df6d19d24ff4a0","name":"GET https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/games.json","kind":3,"startTimeUnixNano":1681993213782100200,"endTimeUnixNano":1681993214555000000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/data/DahLkS1ApbwVgPUFOW3g-/default/games.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2114}},{"key":"http.response_content_length_uncompressed","value":{"intValue":8772}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993213783200000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993213783200000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993213783200000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993213783200000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993213783200000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993213783200000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993213859900200,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993214294200000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993214531000000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"2dc57ea7069482c720b303f0d2db4d23","spanId":"158836ffcce5cfda","name":"GET https://rivalarium.com/_next/static/css/a76164b53e79dda2.css","kind":3,"startTimeUnixNano":1681993214680100000,"endTimeUnixNano":1681993214739800000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/static/css/a76164b53e79dda2.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":3105}},{"key":"http.response_content_length_uncompressed","value":{"intValue":14291}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993214680800000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993214680800000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993214680800000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993214680800000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993214680800000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993214680800000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993214703600000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993214704900000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993214707000000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"cf1820fe6f71be289130d0784a1dfbf1","spanId":"f1fe732554b09ea9","name":"GET https://rivalarium.com/_next/static/css/e726b5da4d37bd50.css","kind":3,"startTimeUnixNano":1681993214847200000,"endTimeUnixNano":1681993214907400200,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/static/css/e726b5da4d37bd50.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2438}},{"key":"http.response_content_length_uncompressed","value":{"intValue":10276}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993214848900000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993214848900000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993214848900000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993214848900000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993214848900000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993214848900000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993214876900000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993214878100200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993214880600000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"545d904ff2999eb5e1eb29fd13c19da4","spanId":"cff8767c7810ed90","name":"GET https://rivalarium.com/_next/static/css/0b2e8e2364ced334.css","kind":3,"startTimeUnixNano":1681993215233000000,"endTimeUnixNano":1681993215352600000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/static/css/0b2e8e2364ced334.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":3071}},{"key":"http.response_content_length_uncompressed","value":{"intValue":14904}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993215234400000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993215234400000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993215234400000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993215234400000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993215234400000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993215234400000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993215239300000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993215241300200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993215256600000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"b6678b762c9a4f2ea4b518022601a2b0","spanId":"5b8d31c30da99e0f","name":"GET https://rivalarium.com/_next/static/css/6fdd0b4dad0c05e2.css","kind":3,"startTimeUnixNano":1681993215512100000,"endTimeUnixNano":1681993215531700200,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://rivalarium.com/_next/static/css/6fdd0b4dad0c05e2.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":3425}},{"key":"http.response_content_length_uncompressed","value":{"intValue":17229}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681993215513200000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681993215513200000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681993215513200000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681993215513200000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681993215513200000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681993215513200000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681993215516700200,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681993215518600200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681993215521300200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0}]}]}]}',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://rivalarium.com',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
        },
      }
    )
  })
}