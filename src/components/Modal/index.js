import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import MyLargeModal from './Modal';

class Modal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      lgShow: false,
    };
  }
  render() {
    const smClose = () => this.setState({ smShow: false });
    const lgClose = () => this.setState({ lgShow: false });
    return (
      <ButtonToolbar>
        <Button
          bsStyle="primary"
          onClick={() => this.setState({ lgShow: true })}
        >
          购买
        </Button>
        <MyLargeModal
          show={this.state.smShow}
          onHide={smClose}
          data={this.props.countryData}
        />
        <MyLargeModal
          show={this.state.lgShow}
          onHide={lgClose}
          data={this.props.countryData}
        />
      </ButtonToolbar>
    );
  }
}
export default Modal;
