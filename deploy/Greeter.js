const GREETER_ARGS = require("../args/Greeter");

module.exports = async function ({ deployments, getNamedAccounts }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log(`>>> Deployer address: ${deployer}`);

  console.log(`>>> Contract Arguments: ${GREETER_ARGS}`);
  await deploy("Greeter", {
    from: deployer,
    args: GREETER_ARGS,
    log: true,
    waitConfirmations: 1,
  });
};

module.exports.tags = ["Greeter"];
