import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';

class Alerts extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <Alert bsStyle={this.props.infoType}>{this.props.infoContent}</Alert>
    );
  }
}

export default Alerts;
