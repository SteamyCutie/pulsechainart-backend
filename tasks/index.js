task("greeterGreet", "greet() to get the Greeting", require("./greeterGreet"));

task(
  "greeterSetGreeting",
  "setGreeting() to set the Greeting",
  require("./greeterSetGreeting")
).addParam("greeting", "the new greeting");

task(
  "pulseNftPMint",
  "pMint() to set the public mint",
  require("./pulseNftPMint")
).addParam("amount", "mint amount");
