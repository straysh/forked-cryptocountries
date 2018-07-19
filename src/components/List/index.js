import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Row from 'react-bootstrap/lib/Row';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import Item from './Item';
import s from './List.scss';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <div>
          <ButtonToolbar bsClass={s.rank}>
            <DropdownButton title="价格下降" id="dropdown-size-medium">
              <MenuItem eventKey="1">价格上涨</MenuItem>
              <MenuItem eventKey="2">价格下降</MenuItem>
              <MenuItem eventKey="3">最新</MenuItem>
              <MenuItem eventKey="4">最老的</MenuItem>
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
}

export default withStyles(s)(List);
