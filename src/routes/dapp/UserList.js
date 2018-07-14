/* eslint-disable react/sort-comp */
import React from 'react';
import UserListCompoent from '../../components/UserList';

class UserList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div>
        <UserListCompoent data={this.state.data} />
      </div>
    );
  }
  componentDidMount() {
    this.loadFirstPageData();
  }
  loadFirstPageData() {
    const data2 = [
      {
        id: 1,
        name: 'D46202',
        countries: 7,
        value: '100.52 ETH',
      },
      {
        id: 2,
        name: 'Hehe',
        countries: 5,
        value: '21.52 ETH',
      },
      {
        id: 3,
        name: 'D95270',
        countries: 3,
        value: '1.52 ETH',
      },
    ];

    this.setState({
      data: data2,
    });
  }
}

export default UserList;
