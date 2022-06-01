task("greeterGreet", "greet() to get the Greeting", require("./greeterGreet"));

task(
  "greeterSetGreeting",
  "setGreeting() to set the Greeting",
  require("./greeterSetGreeting")
).addParam("greeting", "the new greeting");
