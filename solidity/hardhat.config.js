require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// Be aware of NEVER sharing or committing your secret seed, or private key with others
// Be aware of NEVER putting real Ether into testing accounts
// Your secret seed or private key should be kept private at all times! 
const RINKEBY_DEPLOYER_PRIVATE_KEY = process.env.RINKEBY_DEPLOYER_PRIVATE_KEY

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: { },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + process.env.INFURA_ID,
      accounts: [RINKEBY_DEPLOYER_PRIVATE_KEY]
    }
  }
};

