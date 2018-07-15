import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import imgUrl from '../../../public/countries/au.svg';

class MyLargeModal extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            {data.name} &nbsp;<small>刷新价格</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ backgroundColor: '#000000', width: '200px' }}>
            <img src={imgUrl} width="164" height="164" />
          </div>
          <div>
            <p>
              You can purchase Argentina for <strong>{data.price}</strong> from
              &nbsp;
              <Button bsStyle="primary" bsSize="xsmall">
                {data.owner}
              </Button>
            </p>
            <p>
              The next price someone can purchase this country for is 63.22237
              ETH
            </p>
            <p>
              您可以出价高于当前的国家价格，以确保您获得购买。如果您的出价超过当前价格，您将得到退款的差额。
            </p>
            <p>如果价格高于您的出价，您的交易可能会失败。</p>
            <p>This information was updated 2 hours ago.</p>
            <p>
              免责声明：各国都是收藏品，不保证其他玩家或其他人会向您购买此收藏品。
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ width: '500px' }}>
            <span>{data.price} &nbsp;</span>
            <Button bsStyle="primary" onClick={this.handleClick}>
              购买
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
  handleClick() {
    alert('通多MetaMask，打开交易窗口');
  }
}

export default MyLargeModal;
