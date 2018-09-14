/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import queryString from 'query-string';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Badge from 'react-bootstrap/lib/Badge';
import Button from 'react-bootstrap/lib/Button';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import history from '../../history';
import { connect } from 'react-redux';
import { User } from '../../actions';

import s from './Header.css';
import Link from '../Link';
import Alerts from '../Alerts';
import ethOffline from './eth_offline.svg';
import ethOnline from './eth_online.svg';
import Web3 from 'web3';
import ABI from '../../../ganache/build/contracts/Info';

class Header extends React.Component {
  _gotoTokens(e) {
    e.preventDefault();
    e.stopPropagation();
    history.replace('/tokens');
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      ethFlag: 'ethOffline',
      countryNumber: 0,
      name: '000000',
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

    // 读取网络状态
    web3.eth.net.getId().then(result => {
      if (result !== 1) {
        this.setState({ ethFlag: 'ethOnline' });
      }
    });

    // 读取当前账户国家数量
    web3.eth.getAccounts().then(accounts => {
      const account = accounts[0];
      contract.methods
        .balanceOf(account)
        .call()
        .then(result => {
          this.setState({ countryNumber: result });
        })
        .catch(error => {
          console.log(error.message);
        });
    });

    // 读取当前账户address
    web3.eth.getAccounts().then(accounts => {
      let account = accounts[0];
      this.setState({name: account.slice(account.length - 6)});
    });
  }

  render() {
    const { user } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navbar
            fluid
            collapseOnSelect
            style={{ backgroundColor: '#fff', borderColor: '#fff' }}
          >
            <Navbar.Header>
              <Navbar.Brand>加密国家</Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem href="/dapp">市井</NavItem>
                <NavItem href="/myitems">
                  MY ITEMS &nbsp;<Badge>{this.state.countryNumber}</Badge>
                </NavItem>
                <NavItem href="#">
                  <Button bsStyle="primary" bsSize="xsmall">
                    {this.state.name}
                  </Button>
                </NavItem>
                <NavItem
                  href="#"
                  onClick={this._gotoTokens}
                  title="Connected:xxx || You are offline"
                >
                  {user.address ||
                    (this.state.ethFlag === 'ethOffline' ? (
                      <img src={ethOffline} width="35" height="35" alt="" />
                    ) : (
                      <img src={ethOnline} width="35" height="35" alt="" />
                    ))}
                </NavItem>
                {/* <NavDropdown title={mapLocalesName()} id="language-you-choose"> */}
                {/* <MenuItem href="?lang=en-us">English</MenuItem> */}
                {/* <MenuItem href="?lang=zh-cn">CN</MenuItem> */}
                {/* </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(s)(Header));
