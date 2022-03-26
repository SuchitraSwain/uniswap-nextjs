require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/2DuBzD4ilfcZ9k14u-FwuONcN6M5mIbj",
      accounts: [
        "6f06349469593ea410155697c96d6812bc27cb127bc954904a4eb24f90a3a062",
      ],
    },
  },
};
