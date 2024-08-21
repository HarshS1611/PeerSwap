require("@nomicfoundation/hardhat-toolbox");
const dotenv = require('dotenv');
dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.26",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    Sepolia: {
      url: `${process.env.ALCHEMY_API_URL}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    
  },  
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY

  },

};
