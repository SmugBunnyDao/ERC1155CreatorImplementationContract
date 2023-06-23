// import { expect } from "chai";
import { ethers } from "hardhat";
// import keccak256 from "keccak256";
// import { MerkleTree } from "merkletreejs";

async function main() {

  const [owner] = await ethers.getSigners();
  console.log("owner",owner.address);

  const nftContractFactory = await ethers.getContractFactory('ERC1155CreatorImplementation');
  const nftContract = await nftContractFactory.deploy();
  console.log("wait deployed to:", nftContract.address);
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
