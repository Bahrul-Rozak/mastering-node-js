import https from "https";

const url = "https://yoururl.com/test";

const request = https.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  function (response) {
    response.addListener("data", function (data) {
      console.log(`Receive : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "bahrul",
  lastName: "rozak",
});

request.write(body);
request.end();
