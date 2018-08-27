import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ButtonComponent from '../../components/Button';
import AlertComponent from '../../components/Alerts';

import s from './Dapp.scss';
import UserList from './UserList';
import CountryList from './CountryList';

import Web3 from 'web3';

class Dapp extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      load: true, // true : alerady stall MateMask
    };
  }

  componentDidMount() {

    // if (typeof web3 !== 'undefined') {
    //   // const web3 = new Web3(web3.currentProvider);
    //   var web3 = new Web3(web3.currentProvider);
    //   console.log(web3, '666');
    // } else {
    //   // this.setState({ load: false });
    //   // set the provider you want from Web3.providers
    //   var web3 = new Web3(
    //     new Web3.providers.HttpProvider('http://localhost:7545'),
    //   );
    // }

    // let address = '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a';
    // let abi = [
    //   {
    //     "anonymous": false,
    //     "inputs": [
    //       {
    //         "indexed": false,
    //         "name": "name",
    //         "type": "string"
    //       },
    //       {
    //         "indexed": false,
    //         "name": "age",
    //         "type": "uint256"
    //       }
    //     ],
    //     "name": "Instructor",
    //     "type": "event"
    //   },
    //   {
    //     "constant": false,
    //     "inputs": [
    //       {
    //         "name": "_fName",
    //         "type": "string"
    //       },
    //       {
    //         "name": "_age",
    //         "type": "uint256"
    //       }
    //     ],
    //     "name": "setInfo",
    //     "outputs": [],
    //     "payable": false,
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    //   },
    //   {
    //     "constant": true,
    //     "inputs": [],
    //     "name": "getInfo",
    //     "outputs": [
    //       {
    //         "name": "",
    //         "type": "string"
    //       },
    //       {
    //         "name": "",
    //         "type": "uint256"
    //       }
    //     ],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    //   }
    // ];

    // create contract instance
    // var contract = web3.eth.contract(abi).at(address);

    // console.log(contract, '666');

    // let name = 'kaite';
    // let age = '18';

    // contract.setInfo(name, age, function(error, res) {
    //   if (error) alert(error)
    //   else alert(res);
    // });
    // contract.getInfo(function(error, result) {
    //   if(!error){
    //     console.log(result);
    //   }else{
    //     console.error(error);
    //   }
    // });

    // account handling
    // web3.eth.defaultAccount = web3.eth.accounts[0];
    // web3.currentProvider.publicConfigStore.on('update', (config) => {
    //   web3.eth.defaultAccount = config.selectedAddress;
    //   updateUI();
    // });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div>
            {this.state.load ? (
              ''
            ) : (
              <AlertComponent
                infoType="danger"
                infoContent="未连接 CryptoCountries需要Web3浏览器才能像MetaMask或Mist一样使用"
              />
            )}
            {/* <AlertComponent */}
            {/* infoType="danger" */}
            {/* infoContent="您目前正在使用测试网络“ropsten”。" */}
            {/* /> */}
            {/* <AlertComponent */}
            {/* infoType="info" */}
            {/* infoContent="载入中...从区块链世界读取状态。" */}
            {/* /> */}
            <AlertComponent
              infoType="success"
              infoContent="Cities are going live! Join the discussion in our Discord"
            />
          </div>
          {this.state.load === false ? (
            ''
          ) : (
            <div>
              <h1 className={s.title}>{this.props.title}</h1>
              <UserList />
              <ButtonComponent />
              <h1>COUNTRIES</h1>
              <CountryList />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Dapp);
