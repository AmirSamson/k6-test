/*
This is a test for adding Groups with Thresholds 
with 1s gracefulStop after each iteration
with individualRequests and batchRequests
*/
import http from 'k6/http';
import { group } from 'k6';
import { Options } from 'k6/options';

export const options: Options = {
  thresholds: {
    'group_duration{group:::individualRequests}': ['avg <= 300'],
    'group_duration{group:::batchRequests}': ['avg <= 200'],
  },
  

  scenarios: { 
    gracefulStop: {
      executor: 'shared-iterations',
      gracefulStop: '1s',
    
    },
  }
};

export interface Stage {
  duration: '10s',
  vus: 1
}

export default function () {
  group('individualRequests', function () {
    http.get('https://dev.rivalarium.com');
    http.get('https://dev.rivalarium.com/game');
    http.get('https://dev.rivalarium.com/tournament');
  });

  group('batchRequests', function () {
    http.batch([
      ['GET', `https://dev.rivalarium.com`],
      ['GET', `https://dev.rivalarium.com/game`],
      ['GET', `https://dev.rivalarium.com/tournament`],
    ]);
  });
}
