import React from 'react';
import PropTypes from "prop-types";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Row from 'react-bootstrap/lib/Row';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Item from './Item';
import s from './List.scss';
// import {connect} from "react-redux";
// import {CountryItems} from 'actions';

class List extends React.Component {
  static contextTypes = {
    fetch: PropTypes.func.isRequired,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '价格下降',
    };
  }
  componentDidMount() {
    // this.props.loadAllItems(this.context.fetch);
  }
  render() {
    return (
      <div>
        <div className={s.rankCountry}>
          <ButtonToolbar>
            <DropdownButton title={this.state.value} id="dropdown-size-medium">
              <MenuItem eventKey="up" onSelect={this.onSelectHandle.bind(this)}>价格上涨</MenuItem>
              <MenuItem eventKey="down" onSelect={this.onSelectHandle.bind(this)}>价格下降</MenuItem>
              <MenuItem eventKey="new" onSelect={this.onSelectHandle.bind(this)}>最新</MenuItem>
              <MenuItem eventKey="old" onSelect={this.onSelectHandle.bind(this)}>最老的</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>
        <div>
          <Row>
            {this.props.data.map((item, index) => (
              <Item key={index} data={item} />
            ))}
          </Row>
        </div>
      </div>
    );
  }
  onSelectHandle(eventKey) {
    let tmp = '价格下降';
    switch (eventKey) {
      case "up":
        tmp = '价格上涨';
      break;
      case "down":
        tmp = '价格下降';
        break;
      case "new":
        tmp = '最新';
        break;
      case "old":
        tmp = '最老的';
        break;
    }
    this.setState({
      value: tmp,
    });
    this.props.pageRank(eventKey);
  }
}

// const mapStateToProps = state => ({
//   countryitems: state.countryitems,
// });
// const mapDispatchToProps = dispatch => {
//   return {
//     loadAllItems: (...args)=>{dispatch(CountryItems.loadAllItems(...args));}
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)( withStyles(s)(List) );

export default withStyles(s)(List);
