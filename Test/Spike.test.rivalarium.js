import http from "k6/http";
import { sleep } from "k6";

export const options = {
  scenarios: {
    spike: {
      executor: "ramping-arrival-rate",
      preAllocatedVUs: 1000,
      timeUnit: "1s",
      stages: [
        { duration: "10s", target: 10 }, // below normal load
        { duration: "1m", target: 10 },
        { duration: "10s", target: 500 }, // spike to 500 iterations
        { duration: "3m", target: 500 }, // stay at 500 for 3 minutes
        { duration: "10s", target: 10 }, // scale down. Recovery stage.
        { duration: "3m", target: 10 },
        { duration: "10s", target: 0 },
      ],
      gracefulStop: "2m",
    },
  },
};

export default function () {
  const BASE_URL = "https://services.rivalarium.com/api/v1/user_info/service/get"; // make sure this is not production
  sleep(2);

}
