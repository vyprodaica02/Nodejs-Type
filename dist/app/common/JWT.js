"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const app = require("./App");
let make = (user) => {
    return new Promise(function (resolve, reject) {
        jwt.sign({ data: user }, app.AccessToken, {
            algorithm: "HS256",
            expiresIn: app.tokenTime,
        }, function (err, token) {
            if (err)
                return reject(err);
            return resolve(token);
        });
    });
};
//check token
const check = function (token) {
    return new Promise((resolve, rejects) => {
        jwt.verify(token, app.AccessToken, function (err, data) {
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
