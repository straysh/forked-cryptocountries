import React from 'react';
import PropTypes from 'prop-types';
import Alerts from '../../components/Alerts';
import ButtonComponent from '../../components/Button';
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
          <Alerts
            infoType="danger"
            infoContent="您目前正在使用测试网络“ropsten”。"
          />
          <Alerts
            infoType="success"
            infoContent="Cities are going live! Join the discussion in our Discord"
          />
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
