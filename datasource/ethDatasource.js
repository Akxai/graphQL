const { RESTDataSource } = require("apollo-datasource-rest");

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    const endpoint = `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    return this.get(endpoint);
  }

  async totalSupplyOfEther() {
    const endpoint = `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    return this.get(endpoint);
  }
}

module.exports = EtherDataSource;
