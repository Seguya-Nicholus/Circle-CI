const Marks = require("./models/marks");
const student = require("./models/student");

const nicholus = new Marks("Math", "Nicholus", "60");
nicholus.computeScore();

const daniel = new Marks("Science", "Daniel", 30);
daniel.computeScore();

const mugiba = new Marks("English", "Mugiba", "32");
mugiba.isValidate();

module.exports = nicholus;
