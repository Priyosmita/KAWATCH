// scripts/deploy.js
async function main() {
    const TransactionStorage = await ethers.getContractFactory("TransactionStorage");
    const transactionStorage = await TransactionStorage.deploy();
  
    console.log("TransactionStorage deployed to:", transactionStorage.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  