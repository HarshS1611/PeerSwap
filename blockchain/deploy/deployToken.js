const { ethers } = require("hardhat");
require("@nomicfoundation/hardhat-toolbox");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Token1 = await ethers.getContractFactory("Token1");
    const token1 = await Token1.deploy(ethers.parseEther("100"));
    await token1.waitForDeployment();

    console.log("Token address:", token1.address);


    const Token2 = await ethers.getContractFactory("Token2");
    const token2 = await Token2.deploy(ethers.parseEther("100"));
    await token2.waitForDeployment();

    console.log("Token address:", token2.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });