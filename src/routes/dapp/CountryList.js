/* eslint-disable react/sort-comp */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ListCompoent from '../../components/List';
import PaginationComponent from '../../components/Pagination';
import s from './CountryList.scss';

class CountryList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      activePage: 1,
      totalNumber: 0,
    };
  }

  componentWillMount() {
    this.loadFirstData();
  }

  loadFirstData() {
    const self = this;
    setTimeout(() => {
      const data2 = [
        {
          id: 2,
          name: '澳大利亚',
          flag: 'guoqi',
          price: '431.52',
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
          price: '45.52',
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
          price: '4381.52',
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
          price: '431.52',
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
          price: '431.52',
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
          price: '431.52',
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
          price: '431.52',
          owner: 'D46202',
          capital: '堪培拉',
          language: '英语',
          population: '30298765',
          currency: 'USD',
        },{
          id: 2,
          name: '澳大利亚',
          flag: 'guoqi',
          price: '431.52',
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
          price: '4561.52',
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
          price: '4381.52',
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
          price: '431.52',
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
          price: '431.52',
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
          price: '431.52',
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
          price: '431.52',
          owner: 'D46202',
          capital: '堪培拉',
          language: '英语',
          population: '30298765',
          currency: 'USD',
        },{
          id: 2,
          name: '澳大利亚',
          flag: 'guoqi',
          price: '431.52',
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
          price: '4561.52',
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
          price: '4381.52',
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
          price: '431.52',
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
          price: '431.52',
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
          price: '431.52',
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
          price: '431.52',
          owner: 'D46202',
          capital: '堪培拉',
          language: '英语',
          population: '30298765',
          currency: 'USD',
        },
      ];
      self.setState({data: data2, totalNumber: data2.length});
    }, 1000);
  }

  pageClick(pageNum) {
    if (pageNum !== this.state.activePage) {
      this.setState({data: this.state.data, activePage: pageNum});
    }
  }

  render() {
    return (
      <div>
        <ListCompoent data={this.state.data}/>
        <div className={s.pagination}>
          <PaginationComponent
            totalNumber={this.state.totalNumber}
            activePage={this.state.activePage}
            pageClick={this.pageClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CountryList);