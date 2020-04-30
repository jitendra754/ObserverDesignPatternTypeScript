"use strict";
exports.__esModule = true;
var Sale_1 = require("./Sale");
var Client_1 = require("./Client");
// Creates a new Sale on the store
var blackFriday = new Sale_1.Sale();
// Creates our clients
var clientA = new Client_1.Client('John', 'john@email.com');
var clientB = new Client_1.Client('Jessica', 'jessica@email.com');
var clientC = new Client_1.Client('George', 'george@email.com');
// Add our clients to the observers list
blackFriday.addObserver(clientA);
blackFriday.addObserver(clientB);
blackFriday.addObserver(clientC);
// Notify all of our clients about Black Friday
blackFriday.notifyObservers();
