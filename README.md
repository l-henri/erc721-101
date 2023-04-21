# ERC721 101

## Introduction
Welcome! This is an automated workshop that will explain how to deploy an ERC721 token, and customize it to perform specific functions.
It is aimed at developpers that have never written code in Solidity, but who understand its syntax.

## How to work on this TD
### Introduction
The TD has two components:
- An ERC20 token, ticker TD-ERC721-101, that is used to keep track of points 
- An evaluator contract, that is able to mint and distribute TD-ERC721-101 points

Your objective is to gather as many TD-ERC721-101 points as possible. Please note :
- The 'transfer' function of TD-ERC721-101 has been disabled to encourage you to finish the TD with only one address
- You can answer the various questions of this workshop with different ERC721 contracts. However, an evaluated address has only one evaluated ERC721 contract at a time. To change the evaluated ERC721 contract associated with your address, call `submitExercice()`  with that specific address.
- In order to receive points, you will have to do execute code in `Evaluator.sol` such that the function `TDERC20.distributeTokens(msg.sender, n);` is triggered, and distributes n points.
- This repo contains an interface `IExerciceSolution.sol`. Your ERC721 contract will have to conform to this interface in order to validate the exercice; that is, your contract needs to implement all the functions described in `IExerciceSolution.sol`. 
- A high level description of what is expected for each exercice is in this readme. A low level description of what is expected can be inferred by reading the code in `Evaluator.sol`.
- The Evaluator contract sometimes needs to make payments to buy your tokens. Make sure he has enough ETH to do so! If not, you can send ETH directly to the contract.

### Getting to work
- Clone the repo on your machine
- Install the required packages `npm i`
- Register for an infura API key 
- Register for an etherscan API key 
- Create a `.env` file that contains a mnemonic phrase for deployment, an infura API key and an Etherscan API key. 
- Test that you are able to connect to the Sepolia network with `npx hardhat console --network sepolia`
- To deploy a contract, configure a script in the [scripts folder](scripts). Look at the way the TD is deployed and try to iterate
- Test your deployment locallly with `npx hardhat run scripts/your-script.js`
- Deploy on Sepolia `npx hardhat run scripts/your-script.js --network sepolia`


## Points list
### Setting up
- Create a git repository and share it with the teacher
- Install Hardhat and create an empty hardhat project (2 pts). Create an infura API key to be able to deploy to the Sepolia testnet
These points will be attributed manually if you do not manage to have your contract interact with the evaluator, or automatically when calling `submitExercice()` for the first time.

### ERC721 basics
- Create an ERC721 token contract wand give token 1 to Evaluator contract
- Deploy it to the Sepolia testnet
- Call `submitExercice()` in the Evaluator to configure the contract you want evaluated (2 pts)
- Call `ex1_testERC721()` in the evaluator to receive your points (2 pts) 
- Call `ex2a_getAnimalToCreateAttributes()` to get assigned a random creature to create. Mint it and give it to the evaluator
- Call `ex2b_testDeclaredAnimal()` to receive points (2 pts)
- Create a function to allow breeder registration. Only allow listed breeders should be able to create animals
- Call `ex3_testRegisterBreeder()` to prove your function works (2pts)

### Minting and burning NFTs from contracts
- Create a function to allow breeders to declare animals 
- Call `ex4_testDeclareAnimal()` to get points (2 pts)
- Create a function to allow breeders to declare dead animals
- Call `ex5_declareDeadAnimal()` to get points (2 pts)

### Selling and transferring 
- Create a function to offer an animal on sale
- Create a getter for animal sale status and price
- Create a function to buy the animal
- Call `ex6a_auctionAnimal_offer()` to show your code work (1 pt)
- Call `ex6b_auctionAnimal_buy()` to show your code work (2 pt)

### Mix and match
- The following exercices are in `Evaluator2.sol` . 
- Create a function `declareAnimalWithParents()` to declare parents of an animal when creating it
- Create a getter to retrieve parents id `getParents()`
- Call `ex7a_breedAnimalWithParents() ` to get points (1pt)
- Create a function to offer an animal for reproduction, against payment
- Create a getter for animal reproduction status and price
- Call `ex7b_offerAnimalForReproduction()` to get points (1pt)
- Create a function to pay for reproductive rights
- Call `ex7c_payForReproduction()` to get points (1pt)

### Extra points
Extra points if you find bugs / corrections this TD can benefit from, and submit a PR to make it better.  Ideas:
- Adding a way to check the code of a specific contract was only used once (no copying) 
- Publish the code of the Evaluator on Etherscan using the "Verify and publish" functionnality 

## TD addresses
- ERC20TD [`0x082452B4259d6d1696e15E9ca1D3ace9bd8252E7`](https://sepolia.etherscan.io/address/0x082452B4259d6d1696e15E9ca1D3ace9bd8252E7)
- Evaluator [`0xca2601Fcf4276CcDC64Fd53fCE882298f1EF8b64`](https://sepolia.etherscan.io/address/0xca2601Fcf4276CcDC64Fd53fCE882298f1EF8b64)
- Evaluator2 [`0x8d366EC7e67C3cEB97c64217780e5C2052560B2B`](https://sepolia.etherscan.io/address/0x8d366EC7e67C3cEB97c64217780e5C2052560B2B)

