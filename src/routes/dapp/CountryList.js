/* eslint-disable react/sort-comp */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import ListCompoent from '../../components/List';
import PaginationComponent from '../../components/Pagination';
import s from './CountryList.scss';
import { connect } from 'react-redux';
import { CountryItems } from '../../actions';

class CountryList extends React.Component {
  static contextTypes = {
    fetch: PropTypes.func.isRequired,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: 1,
      data: [],
      // indexList: [],
      //   totalNumber: 0,
    };
  }
  componentDidMount() {
    this.props.loadAllItems(this.context.fetch);
  }
  sortState() {
    console.log('reload country');
  }
  // pageClick(pageNum, belong = 'eu', order = 'new') {
  //   console.log(pageNum,belong,order,'2222');
  //   const self = this;
  //   if(belong !== 'all'){
  //     let result = Array.from(self.props.countryitems.data.filter(item => item.belong === belong && item.condition === order));
  //     console.log(pageNum, this.props,this.state,'3333',result);
  //     if (pageNum !== this.state.activePage) {
  //       self.state.indexList = [];
  //       // for (let i = (pageNum - 1) * 5; i < 5 * pageNum; i++) {
  //       for (let i = 0; i < result.length; i++) {
  //         self.state.indexList.push(result[i]);
  //       }
  //       // }
  //     }
  //   }else{
  //     let result = Array.from(self.props.countryitems.data.filter(item => item.condition === order));
  //   }
  //   self.setState({ indexList: self.state.indexList, activePage: pageNum });
  // }
  pageClick(pageNum) {
    let tmp = [];
    const res = this.props.countryitems;
    if (pageNum !== this.state.activePage) {
      tmp.length = 0;
      for (let i = (pageNum - 1) * 5; i < 5 * pageNum; i++) {
        if(res.data[i]){
          tmp.push(res.data[i]);
        }
      }
      this.setState({data: tmp, activePage: pageNum});
    }
  }
  // pageRank(code){
  //   let result = Array.from(this.props.countryitems.data.filter(item => item.condition === code));
  // }
  render() {
    const { countryitems } = this.props;
    let indexList = [];
    const data = countryitems.data;
    if (data.length > 0) {
      for (let i = 0; i < 5; i++) {
        indexList.push(data[i]);
      }
    }
    return (
      <div>
        <ListCompoent data={this.state.data.length > 0 ? this.state.data : indexList } />
        <div className={s.pagination}>
          <PaginationComponent
            totalNumber={countryitems.data.length}
            activePage={this.state.activePage}
            pageClick={this.pageClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countryitems: state.countryitems,
});
const mapDispatchToProps = dispatch => ({
  loadAllItems: (...args) => {
    dispatch(CountryItems.loadAllItems(...args));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(s)(CountryList));
