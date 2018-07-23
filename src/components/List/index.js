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
  // static contextTypes = {
  //   fetch: PropTypes.func.isRequired,
  // };
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '价格下降',
    };
  }
  componentDidMount(){
    // this.props.loadAllItems(this.context.fetch);
    // console.log(this.props,'222');
  }
  render() {
    // this.props.data
    return (
      <div>
        <div className={s.rankCountry}>
          <ButtonToolbar>
            <DropdownButton title={this.state.value} id="dropdown-size-medium">
              <MenuItem eventKey="价格上涨" onSelect={this.onSelectHandle.bind(this)}>价格上涨</MenuItem>
              <MenuItem eventKey="价格下降" onSelect={this.onSelectHandle.bind(this)}>价格下降</MenuItem>
              <MenuItem eventKey="最新" onSelect={this.onSelectHandle.bind(this)}>最新</MenuItem>
              <MenuItem eventKey="最老的" onSelect={this.onSelectHandle.bind(this)}>最老的</MenuItem>
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
    this.setState({
      value: eventKey,
    });
    console.log(this.props);
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
