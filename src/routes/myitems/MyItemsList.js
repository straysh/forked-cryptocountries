/* eslint-disable react/sort-comp */
import React from 'react';
import ListCompoent from '../../components/List';

class MyItemsList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div>
        <ListCompoent data={this.state.data} />
      </div>
    );
  }
  componentDidMount() {
    this.loadFirstPageData();
  }
  loadFirstPageData() {
    const data2 = [
      {
        id: 2,
        name: 'Australia',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        other: '',
      },
      {
        id: 3,
        name: 'American',
        flag: 'guoqi',
        price: '4561.52ETH',
        owner: 'D4632',
        other: '',
      },
      {
        id: 4,
        name: 'China',
        flag: 'guoqi',
        price: '4381.52ETH',
        owner: 'D44202',
        other: '',
      },
      {
        id: 5,
        name: 'Japan',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        other: '',
      },
      {
        id: 2,
        name: 'Franch',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        other: '',
      },
      {
        id: 2,
        name: 'Newzland',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        other: '',
      },
      {
        id: 2,
        name: 'Malysia',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        other: '',
      },
    ];

    this.setState({
      data: data2,
    });
  }
}

export default MyItemsList;
