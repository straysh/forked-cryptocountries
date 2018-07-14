import React from 'react';
import Item from './Item';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

class UserList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <ButtonToolbar>
          {this.props.data.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </ButtonToolbar>
      </div>
    );
  }
}

export default UserList;
