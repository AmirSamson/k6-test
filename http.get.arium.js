import http from "k6/http";
import { sleep } from "k6";

export default function main() {
  let response;

  group("page_1 - https://dev.rivalarium.com/signin", function () {
    response = http.post(
      "https://otlp-dev.rivalarium.com/v1/traces",
      '{"resourceSpans":[{"resource":{"attributes":[{"key":"service.name","value":{"stringValue":"client-web-next-client"}},{"key":"telemetry.sdk.language","value":{"stringValue":"webjs"}},{"key":"telemetry.sdk.name","value":{"stringValue":"opentelemetry"}},{"key":"telemetry.sdk.version","value":{"stringValue":"1.7.0"}}],"droppedAttributesCount":0},"scopeSpans":[{"scope":{"name":"@opentelemetry/instrumentation-fetch","version":"0.33.0"},"spans":[{"traceId":"475beff34de08ea3e883d5db946b5912","spanId":"457c414e4098ea11","name":"GET https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/home.json","kind":3,"startTimeUnixNano":1681977128413399800,"endTimeUnixNano":1681977128497500200,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/home.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977128419400200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977128419400200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977128419400200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977128419400200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977128419400200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977128419400200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977128432500000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977128477000200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977128490300200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"c7fe28955a65379e22d3f94cb3630d0c","spanId":"5968a1a42e5976f6","name":"GET https://dev.rivalarium.com/_next/static/css/58dfda57fe48bd5c.css","kind":3,"startTimeUnixNano":1681977128466699800,"endTimeUnixNano":1681977128510000000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/static/css/58dfda57fe48bd5c.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":11147}},{"key":"http.response_content_length_uncompressed","value":{"intValue":48304}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977128468400000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977128468400000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977128468400000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977128468400000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977128468400000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977128468400000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977128479000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977128492200200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977128500600000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"0b2fc12420b52e703e0a2de9de4b75e6","spanId":"0aee940408e1b72c","name":"GET https://dev.rivalarium.com/_next/static/css/167a6def628c6f43.css","kind":3,"startTimeUnixNano":1681977128470200000,"endTimeUnixNano":1681977128510700000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/static/css/167a6def628c6f43.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":3559}},{"key":"http.response_content_length_uncompressed","value":{"intValue":19819}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977128471600000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977128471600000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977128471600000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977128471600000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977128471600000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977128471600000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977128486900000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977128493800200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977128501200100,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"1b2a7e60388cb2b66cda9cc6e84c81cc","spanId":"15963dba095920f5","name":"GET https://dev.rivalarium.com/_next/static/css/ea032fac59f3c3fc.css","kind":3,"startTimeUnixNano":1681977128472100000,"endTimeUnixNano":1681977128512100000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/static/css/ea032fac59f3c3fc.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2825}},{"key":"http.response_content_length_uncompressed","value":{"intValue":16320}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977128473000200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977128473000200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977128473000200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977128473000200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977128473000200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977128473000200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977128486900000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977128494400000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977128501700000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0}]}]}]}',
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          accept: "application/json",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev.rivalarium.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(4.5);

    response = http.post(
      "https://server-services-next-pardis.rivalarium.com/api/v1/google/callback",
      '{"error":"Unknown error."}',
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          "content-type": "application/json",
          b3: "",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          origin: "https://dev.rivalarium.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://server-services-next-pardis.rivalarium.com/api/v1/google/callback",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "b3,content-type",
          origin: "https://dev.rivalarium.com",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(0.5);

    response = http.post(
      "https://play.google.com/log?format=json&hasfast=true&authuser=0",
      {
        '[[1,null,null,null,null,null,null,null,null,null,[null,null,null,null,"en",null,null,null,null,[1,false,0]]],1112,[["1681977128858",null,[],null,null,null,null,"[\\"ljY1TboAK3pmkrAih7EqBQ\\",12,false,null,\\"398934752495-nf9nams5ksa10nhp9tmdao4p931jdka0.apps.googleusercontent.com\\",\\"https://dev.rivalarium.com\\",[2],null,null,null,null,null,null,13,null,null,null,[1,1,1,null,1,1,2]]",null,null,12,null,null,null,-12600,null,null,null,null,[],1,null,null,null,null,null,[]],["1681977136110",null,[],null,null,null,null,"[\\"ljY1TboAK3pmkrAih7EqBQ\\",8,false,null,\\"398934752495-nf9nams5ksa10nhp9tmdao4p931jdka0.apps.googleusercontent.com\\",\\"https://dev.rivalarium.com\\",[2],null,null,null,null,[11,[64,44,6,11],null,null,null,null,null,null,null,null,null,null,null,null,null,null,7],7,7269,null,null,null,[1,1,1,null,1,1,2]]",null,null,8,null,null,null,-12600,null,null,null,null,[],2,null,null,null,null,null,[]]],"1681977138873",[]]':
          "",
      },
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-goog-authuser": "0",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          origin: "https://accounts.google.com",
          "x-client-data":
            "CI22yQEIorbJAQjBtskBCKmdygEImejKAQiTocsBCOOXzQEIhaDNAQi9os0BGMHLzAE=",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://play.google.com/log?format=json&hasfast=true&authuser=0",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "POST",
          "access-control-request-headers": "x-goog-authuser",
          origin: "https://accounts.google.com",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(1.9);

    response = http.request(
      "HEAD",
      "https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/home.json",
      null,
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          "x-nextjs-data": "1",
          b3: "f8a1cc6410f81fdfb4cf9c4d318ffa92-4bd944254d28385a-1",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.post(
      "https://otlp-dev.rivalarium.com/v1/traces",
      '{"resourceSpans":[{"resource":{"attributes":[{"key":"service.name","value":{"stringValue":"client-web-next-client"}},{"key":"telemetry.sdk.language","value":{"stringValue":"webjs"}},{"key":"telemetry.sdk.name","value":{"stringValue":"opentelemetry"}},{"key":"telemetry.sdk.version","value":{"stringValue":"1.7.0"}}],"droppedAttributesCount":0},"scopeSpans":[{"scope":{"name":"@opentelemetry/instrumentation-fetch","version":"0.33.0"},"spans":[{"traceId":"31bdf64edc7e23f8482cb2333b51d865","spanId":"09a8ad8207a8e1da","name":"GET https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/home.json","kind":3,"startTimeUnixNano":1681977135618000100,"endTimeUnixNano":1681977135660600000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/home.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977135618300200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977135618300200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977135618300200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977135618300200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977135618300200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977135618300200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977135620300000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977135659000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977135659700000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0}]}]}]}',
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          accept: "application/json",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev.rivalarium.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.get("https://dev.rivalarium.com/undefined", {
      headers: {
        "sec-ch-ua":
          '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "image",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
      },
    });
    sleep(0.5);

    response = http.get(
      "https://server-services-next-pardis.rivalarium.com/api/v1/user_info/",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          "content-type": "application/json",
          b3: "",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          accept: "*/*",
          origin: "https://dev.rivalarium.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );

    response = http.options(
      "https://server-services-next-pardis.rivalarium.com/api/v1/user_info/",
      null,
      {
        headers: {
          accept: "*/*",
          "access-control-request-method": "GET",
          "access-control-request-headers": "b3,content-type",
          origin: "https://dev.rivalarium.com",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
    sleep(5.3);

    response = http.post(
      "https://otlp-dev.rivalarium.com/v1/traces",
      '{"resourceSpans":[{"resource":{"attributes":[{"key":"service.name","value":{"stringValue":"client-web-next-client"}},{"key":"telemetry.sdk.language","value":{"stringValue":"webjs"}},{"key":"telemetry.sdk.name","value":{"stringValue":"opentelemetry"}},{"key":"telemetry.sdk.version","value":{"stringValue":"1.7.0"}}],"droppedAttributesCount":0},"scopeSpans":[{"scope":{"name":"@opentelemetry/instrumentation-fetch","version":"0.33.0"},"spans":[{"traceId":"f8a1cc6410f81fdfb4cf9c4d318ffa92","spanId":"4bd944254d28385a","name":"HEAD https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/home.json","kind":3,"startTimeUnixNano":1681977140750999800,"endTimeUnixNano":1681977140826900000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"HEAD"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/home.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":0}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977140751800000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977140751800000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977140751800000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977140751800000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977140751800000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977140751800000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977140776500000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977140819000000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977140820000000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"0b1ecfed9273ad9fbebffdf67bad8afc","spanId":"f0e21d468b33b1df","name":"GET https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default.json","kind":3,"startTimeUnixNano":1681977142136100000,"endTimeUnixNano":1681977142788100000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1434}},{"key":"http.response_content_length_uncompressed","value":{"intValue":3271}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977142137100000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977142137100000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977142137100000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977142137100000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977142137100000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977142137100000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977142249700000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977142319500000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977142323200000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"edfd32c43c85bb7ecd7ec7a1bfe64bee","spanId":"8bf73d04bad161b6","name":"GET https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/streams.json","kind":3,"startTimeUnixNano":1681977142138000100,"endTimeUnixNano":1681977142789100000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/streams.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2533}},{"key":"http.response_content_length_uncompressed","value":{"intValue":9863}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977142139100200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977142139100200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977142139100200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977142139100200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977142139100200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977142139100200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977142250400000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977142319900200,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977142324300000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"12a082bad41de31818dd07cd1181b8e6","spanId":"e528ed75f8d371f6","name":"GET https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/games.json","kind":3,"startTimeUnixNano":1681977142140100000,"endTimeUnixNano":1681977142789900000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/data/an3EnGDOkfPYZKWxzAkvI/default/games.json"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2319}},{"key":"http.response_content_length_uncompressed","value":{"intValue":9135}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977142141500200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977142141500200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977142141500200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977142141500200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977142141500200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977142141500200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977142250800000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977142325900000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977142327400200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"f5f3b43a88d2ae54a960b0acb9faeeb7","spanId":"b1d089e80aa594be","name":"GET https://dev.rivalarium.com/_next/static/css/813aa6ef75879075.css","kind":3,"startTimeUnixNano":1681977142845100300,"endTimeUnixNano":1681977142877900000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/static/css/813aa6ef75879075.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2359}},{"key":"http.response_content_length_uncompressed","value":{"intValue":10693}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977142847400200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977142847400200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977142847400200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977142847400200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977142847400200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977142847400200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977142851400200,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977142852500000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977142853600000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"5f8898ed6dfb56fc041449865c5c0114","spanId":"172b430033596a05","name":"GET https://dev.rivalarium.com/_next/static/css/cd5931f7b8516362.css","kind":3,"startTimeUnixNano":1681977143006100200,"endTimeUnixNano":1681977143038900000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/static/css/cd5931f7b8516362.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":1670}},{"key":"http.response_content_length_uncompressed","value":{"intValue":6945}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977143007000000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977143007000000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977143007000000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977143007000000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977143007000000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977143007000000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977143012400000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977143014500000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977143017900000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"7ce9bbf8b9bc8703e6b3290d5fe681ef","spanId":"e5d598c2c044f1e6","name":"GET https://dev.rivalarium.com/_next/static/css/136cd51d18fc5013.css","kind":3,"startTimeUnixNano":1681977143012100000,"endTimeUnixNano":1681977143040000000,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/static/css/136cd51d18fc5013.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2382}},{"key":"http.response_content_length_uncompressed","value":{"intValue":11893}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977143013500200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977143013500200,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977143013500200,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977143013500200,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977143013500200,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977143013500200,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977143019700000,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977143020900000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977143023400200,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0},{"traceId":"e0fabde005e1530e4c1199b8753ea8ee","spanId":"1ac5fe1e407c793c","name":"GET https://dev.rivalarium.com/_next/static/css/bb7f9cb26f2d7745.css","kind":3,"startTimeUnixNano":1681977143044000000,"endTimeUnixNano":1681977143058300200,"attributes":[{"key":"component","value":{"stringValue":"fetch"}},{"key":"http.method","value":{"stringValue":"GET"}},{"key":"http.url","value":{"stringValue":"https://dev.rivalarium.com/_next/static/css/bb7f9cb26f2d7745.css"}},{"key":"http.status_code","value":{"intValue":200}},{"key":"http.status_text","value":{"stringValue":""}},{"key":"http.host","value":{"stringValue":"dev.rivalarium.com"}},{"key":"http.scheme","value":{"stringValue":"https"}},{"key":"http.user_agent","value":{"stringValue":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"}},{"key":"http.response_content_length","value":{"intValue":2742}},{"key":"http.response_content_length_uncompressed","value":{"intValue":14218}}],"droppedAttributesCount":0,"events":[{"attributes":[],"name":"fetchStart","timeUnixNano":1681977143045300000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupStart","timeUnixNano":1681977143045300000,"droppedAttributesCount":0},{"attributes":[],"name":"domainLookupEnd","timeUnixNano":1681977143045300000,"droppedAttributesCount":0},{"attributes":[],"name":"connectStart","timeUnixNano":1681977143045300000,"droppedAttributesCount":0},{"attributes":[],"name":"secureConnectionStart","timeUnixNano":1681977143045300000,"droppedAttributesCount":0},{"attributes":[],"name":"connectEnd","timeUnixNano":1681977143045300000,"droppedAttributesCount":0},{"attributes":[],"name":"requestStart","timeUnixNano":1681977143049000200,"droppedAttributesCount":0},{"attributes":[],"name":"responseStart","timeUnixNano":1681977143050500000,"droppedAttributesCount":0},{"attributes":[],"name":"responseEnd","timeUnixNano":1681977143051800000,"droppedAttributesCount":0}],"droppedEventsCount":0,"status":{"code":0},"links":[],"droppedLinksCount":0}]}]}]}',
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          accept: "application/json",
          "content-type": "application/json",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          origin: "https://dev.rivalarium.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9",
        },
      }
    );
  });
}
