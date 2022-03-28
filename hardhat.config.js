require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const private_key = fs.readFileSync(".secret1").toString();
const project_id = fs.readFileSync(".secret2").toString();

module.exports = {
  networks:{
    // hardhat : {
    //   chainId : 1337
    // },
    mumbai : {
      url : `https://polygon-mumbai.infura.io/v3/${project_id}`,
      accounts : [private_key]
    },
    // mainnet : {
    //   url : `https://polygon-mainnet.infura.io/v3/${project_id}`,
    //   accounts : [private_key]
    // }
  },
  solidity: "0.8.4",
};
