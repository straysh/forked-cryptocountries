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

class Header extends React.Component {
  _gotoTokens(e) {
    e.preventDefault();
    e.stopPropagation();
    history.replace('/tokens');
  }

  render() {
    const { user } = this.props;
    console.log(user);
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
                  MY ITEMS &nbsp;<Badge>4</Badge>
                </NavItem>
                <NavItem href="#">
                  <Button bsStyle="primary" bsSize="xsmall">
                    D46202
                  </Button>
                </NavItem>
                <NavItem
                  href="#"
                  onClick={this._gotoTokens}
                  title="Connected:xxx || You are offline"
                >
                  {user.address || (
                    <img src={ethOffline} width="35" height="35" alt="" />
                  )}
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
