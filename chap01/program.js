// Chapter 1

document.writeln('Hello, world"');

Function.prototype.method = function (name, func){
  this.prototype[name] = func;
  return this;
};

// Chapter 3

var empty_object = {};

var stooge = {
  "fist-name": "Jerome",
  "last-name": "Howard"
};

var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 15:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  },

};


