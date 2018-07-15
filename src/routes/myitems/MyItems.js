import React from 'react';
import PropTypes from 'prop-types';
import Alerts from '../../components/Alerts';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MyItems.css';
import MyitemsList from './MyItemsList';

class MyItems extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    // const id = this.props.param.id;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Alerts
            infoType="danger"
            infoContent="您目前正在使用测试网络“ropsten”。"
          />
          <h1>
            <strong>{this.props.title}</strong>
          </h1>
          <MyitemsList />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MyItems);
