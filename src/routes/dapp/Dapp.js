import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ButtonComponent from '../../components/Button';
import AlertComponent from '../../components/Alerts';

import s from './Dapp.scss';
import UserList from './UserList';
import CountryList from './CountryList';
import Web3 from 'web3';
import ABI from '../../../ganache/build/contracts/Info';

class Dapp extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      load: true,
      loading: false,
      netState: '',
    };
  }

  componentDidMount() {
    if (typeof web3 !== 'undefined') {
      // 使用 Mist/MetaMask 的提供者
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(window.web3.currentProvider);
    } else {
      // 处理用户没安装的情况， 比如显示一个消息
      // 告诉他们要安装 MetaMask 来使用我们的应用
      this.setState({ load: false });
      return;
      // App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
      // web3 = new Web3(App.web3Provider);
    }
    const contract = new web3.eth.Contract(
      ABI.abi,
      '0x38dca6c292a31767c45b50eb9ba548c046f1859f',
    );

    web3.eth.net.isListening().then(result => {
      if (result) {
        this.setState({loading: true });
      }
    });

    web3.eth.net.getId().then(result => {
      if (result) {
        if(result === 1){
          this.setState({netState: result });
        } else if(result === 3){
          this.setState({netState: 'Ropsten' });
        } else if(result === 4) {
          this.setState({netState: 'Rinkeby'});
        }else if(result === 42) {
          this.setState({netState: 'Kovan'});
        } else {
          this.setState({netState: '私人'});
        }
      }
    });

    // ganache 上链测试数据
    // Info.deployed().then(function(instance){return instance.listMultipleItems([410,450,764,752,178,732,50,328,768,233,646,84,388,312,296,316,585,800,398,862,598,152,180,434,818,76,620,332,724,710,148,250,72,504,246,634,616,484,458,524,4,158,324,258,8,104,426,430,446,462,478,466,562,231,706,566,120,20,858,788,232,729,516,716,508,728,834,24,404,52,454,663,64,60,92,894,140,266,192,554,320,218,807,748,442,12,16,48,96,558,74,686,116,418,703,624,528,499,222,36,28,204,496,51,690,136,226,292,740,776,826,44,887,798,392,417,533,90,288,86,144,548,638,660,40,492,56,498,608,360,108,854,174,188,234,334,762,833,480,408,344,270,626,384,70,68,694,254,600,428,348,578,380,704,248,356,100,440,208,268,772,678,242,584,162,372,705,702,156,31,586,860,795,583,876,184,882,262,132,612,166,574,260,239,474,500,520,175,238,535,832,666,534,336,674,191,196,203,276,756,438,470,591,340,212,214,531,570,308,580,630,744,352,304,796,581,540,831,659,654,652,642,670,662,400,422,760,368,414,512,604,850,688,300,780,784,170,32,124,792,112,275,364,682,376,804,10,643,840,990,991,992,993,994], 1000000000000000, 2)});

    // 列出所有在出售的国家
    // contract.methods.allItemsForSale().call().then(function (result) {
    //   console.log(result);
    // }).catch(function (error) {
    //   console.log(error.message);
    // });

  }

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div>
            {this.state.load ? ('') : (
              <AlertComponent
                infoType="danger"
                infoContent="未连接，加密国家需要Web3浏览器才能像MetaMask或Mist一样使用。"
              />
            )}
            {this.state.netState === 1 ? ('') : (
            <AlertComponent
              infoType="danger"
              infoContent={`您目前正在使用 “${this.state.netState}” 测试网络。`}
            />
            )}
            {this.state.loading ? ('') : (
            <AlertComponent
              infoType="info"
              infoContent="载入中...从区块链世界读取状态。"
            />
            )}
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
