"use strict";
exports.__esModule = true;
var Client = /** @class */ (function () {
    function Client(name, email) {
        this.name = name;
        this.email = email;
    }
    Client.prototype.sendEmail = function () {
        console.log("Sending a mail to " + this.name);
        // Code to send a mail for the client, informing there's a sale going on
    };
    return Client;
}());
exports.Client = Client;
