module.exports = async function (taskArgs, hre) {
  const greeter = await hre.ethers.getContract("Greeter");

  console.log(`[source] Greeter.address: ${greeter.address}`);

  try {
    const greet = await greeter.greet();
    console.log(`✅ [${hre.network.name}] greet()`);
    console.log(`Greet: ${greet}`);
  } catch (e) {
    console.log(e);
  }
};
