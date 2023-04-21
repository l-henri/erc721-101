// Deploying the TD somewhere
// To verify it on Etherscan:
// npx hardhat verify --network sepolia <address> <constructor arg 1> <constructor arg 2>

const hre = require("hardhat");
const Str = require('@supercharge/strings')

async function main() {
  // Deploying contracts
  const ERC20TD = await hre.ethers.getContractFactory("ERC20TD");
  const Evaluator = await hre.ethers.getContractFactory("Evaluator");
  const Evaluator2 = await hre.ethers.getContractFactory("Evaluator2");
  const erc20 = await ERC20TD.deploy("TD-ERC721-101","TD-ERC721-101",0);
  
  await erc20.deployed();
  const evaluator = await Evaluator.deploy(erc20.address);
  const evaluator2 = await Evaluator2.deploy(erc20.address);
  console.log(
    `ERC20TD deployed at  ${erc20.address}`
  );
  await evaluator.deployed();
  console.log(
    `Evaluator deployed at ${evaluator.address}`
  );
  console.log(
    `Evaluator2 deployed at ${evaluator2.address}`
  );
    // Setting the teacher
    await erc20.setTeacher(evaluator.address, true)
    await erc20.setTeacher(evaluator2.address, true)
    // Setting random values
    randomNames = []
    randomLegs = []
    randomSex = []
    randomWings = []
    for (i = 0; i < 20; i++)
      {
      randomNames.push(Str.random(15))
      randomLegs.push(Math.floor(Math.random()*5))
      randomSex.push(Math.floor(Math.random()*2))
      randomWings.push(Math.floor(Math.random()*2))
      // randomTickers.push(web3.utils.utf8ToBytes(Str.random(5)))
      // randomTickers.push(Str.random(5))
      }
  
    console.log(randomNames)
    console.log(randomLegs)
    console.log(randomSex)
    console.log(randomWings)
    // console.log(web3.utils)
    // console.log(type(Str.random(5)0)
    await evaluator.setRandomValuesStore(randomNames, randomLegs, randomSex, randomWings);
    await evaluator2.setRandomValuesStore(randomNames, randomLegs, randomSex, randomWings);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
