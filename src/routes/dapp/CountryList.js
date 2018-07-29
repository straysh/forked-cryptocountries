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
    };
  }
  componentDidMount() {
    // this.props.loadAllItems(this.context.fetch);
  }
  pageClick(pageNum, order = 'down') {
    let data = [];
    const { countryitems } = this.props;
    let result = countryitems.data;
    if (result.length > 0) {
      if (order === 'up') {
        data = result.sort((a, b) => a.itemId - b.itemId);
      } else if (order === 'down') {
        data = result.sort((a, b) => a.itemId - b.itemId).reverse();
      } else if (order === 'new') {
        data = result.sort((a, b) => a.updated - b.updated);
      } else if (order === 'old') {
        data = result.sort((a, b) => a.updated - b.updated).reverse();
      }
      const tmp = [];
      for (let i = (pageNum - 1) * 32; i < 32 * pageNum; i++) {
        if (data[i]) {
          tmp.push(data[i]);
        }
      }
      // if (pageNum !== this.state.activePage) {}
      // console.log(pageNum, this.state.activePage,data,tmp);
      this.setState({ data: tmp, activePage: pageNum });
    }
  }
  pageRank(order) {
    let pageNum = 1;
    this.pageClick(pageNum, order);
  }
  getFirstData(data) {
    let indexList = [];
    if (data.length > 0) {
      for (let i = 0; i < 32; i++) {
        if (data[i]) indexList.push(data[i]);
      }
      indexList = indexList.sort((a, b) => a.itemId - b.itemId).reverse(); //默认 down
    }
    return indexList;
  }
  render() {
    const { countryitems } = this.props;
    // console.log(countryitems); //tmp have value, data or  getFirst ？？？
    return (
      <div>
        <ListCompoent
          data={this.state.data.length > 0 ? this.state.data : this.getFirstData(countryitems.data)}
          pageRank={this.pageRank.bind(this)}
        />
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(s)(CountryList));
