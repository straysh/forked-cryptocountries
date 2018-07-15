import React from 'react';
import PropTypes from 'prop-types';
import Alerts from '../../components/Alerts';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Country.css';

class Country extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    // const id = this.props.param.id;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            <strong>{this.props.title}</strong>
          </h1>
          <p>国家简介,此页面相当于弹窗？</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Country);
