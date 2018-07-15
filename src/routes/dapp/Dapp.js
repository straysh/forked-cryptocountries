import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../../components/Button';
import AlertComponent from '../../components/Alerts';
// import DataMapComponent from '../../components/DataMap';
import ListCompoent from '../../components/List';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Dapp.css';
import UserList from './UserList';
import CountryList from './CountryList';

class Dapp extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div>
            <AlertComponent
              infoType="danger"
              infoContent="未连接 CryptoCountries需要Web3浏览器才能像MetaMask或Mist一样使用"
            />
            <AlertComponent
              infoType="danger"
              infoContent="您目前正在使用测试网络“ropsten”。"
            />
            <AlertComponent
              infoType="info"
              infoContent="载入中...从区块链世界读取状态。"
            />
            <AlertComponent
              infoType="success"
              infoContent="Cities are going live! Join the discussion in our Discord"
            />
          </div>
          <h1>
            <strong>{this.props.title}</strong>
          </h1>
          <UserList />
          <p />
          <p>Map</p>
          {/* <DataMapComponent /> */}
          <ButtonComponent />
          <CountryList />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Dapp);
