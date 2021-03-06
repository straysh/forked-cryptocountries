import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';

class Buttons extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <div>
          <ButtonToolbar>
            <Button bsStyle="primary">国家</Button>
          </ButtonToolbar>
        </div>
        <p />
        <div>
          <ButtonToolbar>
            <Button bsStyle="primary">所有</Button>
            <Button>亚洲</Button>
            <Button>欧洲</Button>
            <Button>非洲</Button>
            <Button>北美洲</Button>
            <Button>南美洲</Button>
            <Button>大洋洲</Button>
            <Button>南极洲</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Buttons;
