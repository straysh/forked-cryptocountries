/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import history from '../../history';
import { User } from '../../actions';
import s from './Login.css';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  state = {
    // address: "0xF9cd7495111FA9C2bf75A45ea5D9102f45045fd9",
    address: '0x257d3FE0A22f9498b3F0C78F331B43C6e59d1477',
  };

  constructor(props) {
    super(props);
    // this._setAddress = this._setAddress.bind(this);
  }

  _setAddress = e => {
    this.setState({ address: e.target.value });
  };
  _submitForm = e => {
    e.preventDefault();
    e.stopPropagation();
    if (/^\s*$/.test(this.state.address)) return false;

    this.props.setAddress(this.state.address);
    history.replace('/tokens');
  };

  render() {
    const { address } = this.state;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <form method="post" onSubmit={this._submitForm}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="address">
                Address:
                <input
                  className={s.input}
                  id="address"
                  type="text"
                  name="address"
                  value={address}
                  onChange={this._setAddress}
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setAddress: (...args) => {
    dispatch(User.setAddress(...args));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(s)(Login));
