import React from 'react';
import Item from './Item';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <Grid>
          <ButtonToolbar>
            <DropdownButton title="价格下降" id="dropdown-size-medium">
              <MenuItem eventKey="1">价格上涨</MenuItem>
              <MenuItem eventKey="2">价格下降</MenuItem>
              <MenuItem eventKey="3">最新</MenuItem>
              <MenuItem eventKey="4">最老的</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          <p />
          <Row>
            {this.props.data.map((item, index) => (
              <Item key={index} data={item} />
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default List;
