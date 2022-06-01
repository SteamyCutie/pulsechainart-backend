module.exports = async function (taskArgs, hre) {
  const greeter = await hre.ethers.getContract("Greeter");

  console.log(`[source] Greeter.address: ${greeter.address}`);

  try {
    const tx = await (await greeter.setGreeting(taskArgs.greeting)).wait();
    console.log(`✅ [${hre.network.name}] setGreeting(${taskArgs.greeting})`);
    console.log(` tx: ${tx.transactionHash}`);
  } catch (e) {
    console.log(e);
  }
};
