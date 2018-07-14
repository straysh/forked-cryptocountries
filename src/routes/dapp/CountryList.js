/* eslint-disable react/sort-comp */
import React from 'react';
import ListCompoent from '../../components/List';
import PaginationCompoent from '../../components/Pagination';

class CountryList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div>
        <h2>COUNTRIES</h2>
        <ListCompoent data={this.state.data} />
        <PaginationCompoent />
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
        name: '澳大利亚',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        capital: '堪培拉',
        language: '英语',
        population: '30298765',
        currency: 'USD',
      },
      {
        id: 3,
        name: '美国',
        flag: 'guoqi',
        price: '4561.52ETH',
        owner: 'D4632',
        capital: '堪培拉',
        language: '英语',
        population: '30298765',
        currency: 'USD',
      },
      {
        id: 4,
        name: '中国',
        flag: 'guoqi',
        price: '4381.52ETH',
        owner: 'D44202',
        capital: '堪培拉',
        language: '英语',
        population: '30298765',
        currency: 'USD',
      },
      {
        id: 5,
        name: '日本',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        capital: '堪培拉',
        language: '英语',
        population: '30298765',
        currency: 'USD',
      },
      {
        id: 2,
        name: '法国',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        capital: '堪培拉',
        language: '英语',
        population: '30298765',
        currency: 'USD',
      },
      {
        id: 2,
        name: '英国',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        capital: '堪培拉',
        language: '英语',
        population: '30298765',
        currency: 'USD',
      },
      {
        id: 2,
        name: '德国',
        flag: 'guoqi',
        price: '431.52ETH',
        owner: 'D46202',
        capital: '堪培拉',
        language: '英语',
        population: '30298765',
        currency: 'USD',
      },
    ];

    this.setState({
      data: data2,
    });
  }
}

export default CountryList;
