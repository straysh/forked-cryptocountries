import React from 'react';
import PropTypes from 'prop-types';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from "react-redux";

import web3 from 'utils/web3';
import s from './UserList.css';
import Item from './Item';
import {UserItems} from 'actions';

function getTop10(data){
  const temp = [];
  for(let item of data.values()) {
    let p = web3.utils.fromWei(item.nextPrice);
    p = parseFloat(p).toFixed(4);
    item.p = parseFloat(p);
    temp.push(item.p)
  }

  data = data.sort((a, b)=>{
    return a.p - b.p;
  }).reverse();
  return data.slice(0, 9);
}
class UserList extends React.Component {
  static contextTypes = {
    fetch: PropTypes.func.isRequired,
  };
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    this.props.loadAllItems(this.context.fetch);
  }

  render() {
    const {useritems} = this.props;
    const top10 = useritems.data ? getTop10(useritems.data) : [];
    return (
      <div className={s.worldmap_top10}>
        <ButtonToolbar>
          {top10.map((item, index) => (
            <Item key={index} index={index} data={item} />
          ))}
        </ButtonToolbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  useritems: state.useritems,
});

const mapDispatchToProps = dispatch => {
  return {
    loadAllItems: (...args)=>{dispatch(UserItems.loadAllItems(...args));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(s)(UserList) );
