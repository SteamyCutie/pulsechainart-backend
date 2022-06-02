const PULSECHAINARTNFT_ARGS = require("../args/PulseChainArtNFT");

module.exports = async function ({ deployments, getNamedAccounts }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log(`>>> Deployer address: ${deployer}`);

  console.log(`>>> Contract Arguments: ${PULSECHAINARTNFT_ARGS}`);
  await deploy("PulseChainArtNFT", {
    from: deployer,
    args: PULSECHAINARTNFT_ARGS,
    log: true,
    waitConfirmations: 1,
  });
};

module.exports.tags = ["PulseChainArtNFT"];
