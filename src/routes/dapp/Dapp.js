import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ButtonComponent from '../../components/Button';
import AlertComponent from '../../components/Alerts';

import s from './Dapp.scss';
import UserList from './UserList';
import CountryList from './CountryList';

class Dapp extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount(){
    // console.log(this.props);
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div>
            {/*<AlertComponent*/}
              {/*infoType="danger"*/}
              {/*infoContent="未连接 CryptoCountries需要Web3浏览器才能像MetaMask或Mist一样使用"*/}
            {/*/>*/}
            {/*<AlertComponent*/}
              {/*infoType="danger"*/}
              {/*infoContent="您目前正在使用测试网络“ropsten”。"*/}
            {/*/>*/}
            {/*<AlertComponent*/}
              {/*infoType="info"*/}
              {/*infoContent="载入中...从区块链世界读取状态。"*/}
            {/*/>*/}
            <AlertComponent
              infoType="success"
              infoContent="Cities are going live! Join the discussion in our Discord"
            />
          </div>
          <h1 className={s.title}>{this.props.title}</h1>
          <UserList />
          <ButtonComponent />
          <h1>COUNTRIES</h1>
          <CountryList />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Dapp);
