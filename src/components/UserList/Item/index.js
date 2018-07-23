/* eslint-disable import/first */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';

import web3 from 'utils/web3';
import s from './item.scss';
import allCountries from 'data/all_countries.json';

class Item extends React.Component {
  static contextTypes = {
    fetch: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {index, data: user} = this.props;
    const country = allCountries[user.itemId] ? allCountries[user.itemId].name : 'N/A';
    const tooltip = (
      <Tooltip id="tooltip">
        国家: <strong>{country}</strong>，价值:{' '}
        <strong>{web3.utils.fromWei(user.nextPrice)}</strong>
      </Tooltip>
    );

    const addr = user.owner;
    const c =  addr.slice(addr.length - 6).toUpperCase();
    const i = parseInt(c, 16) > 8388607.5 ? "#FFF" : "#000";
    const bgcolor = "#" + c;
    const f = ((index===0 && 1.3) || (index===1&&1.1) || (0.9)) + "em";
    return (
      <OverlayTrigger placement="top" overlay={tooltip}>
        <Button bsStyle="default" className={s.worldmap_item} style={{fontSize: f}}>
          <div className={s.worldmap_item_rank} style={{color: i, backgroundColor: bgcolor}}  >{index+1}</div>
          <div className={s.worldmap_item_username} >{user.nick}</div>
        </Button>
      </OverlayTrigger>
    );
  }
}

export default withStyles(s)(Item);
