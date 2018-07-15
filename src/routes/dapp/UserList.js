/* eslint-disable react/sort-comp */
import React from 'react';


import UserListCompoent from '../../components/UserList';
import Worldmap from 'components/Worldmap';
import s from './Dapp.scss';
import withStyles from "isomorphic-style-loader/lib/withStyles";

class UserList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div className={s.worldmap_ui}>
        <UserListCompoent data={this.state.data} />
        <Worldmap />
      </div>
    );
  }
  componentDidMount() {
    // this.loadFirstPageData();
  }
}

export default withStyles(s)(UserList);
