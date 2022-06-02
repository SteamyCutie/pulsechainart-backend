module.exports = async function (taskArgs, hre) {
  const pulseNft = await ethers.getContract("PulseChainArtNFT");

  console.log(`[source] PulseChainArtNFT.address: ${pulseNft.address}`);

  try {
    let tx = await (await pulseNft.pMint(taskArgs.amount)).wait();
    console.log(`✅ [${hre.network.name}] pMint()`);
    console.log(` tx: ${tx.transactionHash}`);
    let pulseNftId = await ethers.provider.getTransactionReceipt(
      tx.transactionHash
    );

    console.log(
      ` PulseChainArtNFT nftId: ${parseInt(
        Number(pulseNftId.logs[2].topics[3])
      )}`
    );
  } catch (e) {
    console.log(e);
  }
};
