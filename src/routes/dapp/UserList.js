/* eslint-disable react/sort-comp */
import React from 'react';
import withStyles from "isomorphic-style-loader/lib/withStyles";
import UserListCompoent from '../../components/UserList';
import Worldmap from 'components/Worldmap';
import s from './Dapp.scss';

class UserList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className={s.worldmap_ui}>
        <UserListCompoent />
        <Worldmap />
      </div>
    );
  }
  componentDidMount() {
    // this.loadFirstPageData();
  }
}

export default withStyles(s)(UserList);
