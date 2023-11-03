import { rejects } from "assert";
import { resolve } from "path";

const jwt = require("jsonwebtoken");
const app = require("./App");
let make = (user: any) => {
  return new Promise(function (resolve, reject) {
    jwt.sign(
      { data: user },
      app.AccessToken,
      {
        algorithm: "HS256",
        expiresIn: app.tokenTime,
      },
      function (err: any, token: any) {
        if (err) return reject(err);
        return resolve(token);
      }
    );
  });
};
//check token

const check = function (token: string) {
  return new Promise((resolve, rejects) => {
    jwt.verify(token, app.AccessToken, function (err: string, data: any) {
      if (err) {
        return rejects(err);
      }
      return resolve(data);
    });
  });
};

module.exports = {
  make,
  check,
};
