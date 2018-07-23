import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import imgUrl from '../../../public/countries/au.svg';
import ImageUrl2 from '../../../public/countries/au.png';
import s from './Modal.scss';

class MyLargeModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: '' };
  }
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
            <div className={s.header}>
              <Image src={ImageUrl2} responsive />
              <span>{data.name}</span>
              <small>刷新</small>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={s.content}>
            <div className={s.left}>
              <div className={s.countryCardBg}>
                <Image src={imgUrl} responsive />
              </div>
            </div>
            <div className={s.right}>
              <p>
                You can purchase <strong>{data.name}</strong> for{' '}
                <strong>{data.price}</strong> from
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
          </div>
          <div className={s.footer} />
        </Modal.Body>
        <Modal.Footer>
          <div className={s.purchase}>
            <input
              type="text"
              placeholder="价格在ETH"
              onChange={this.changeHandle.bind(this)}
              value={this.state.value}
              className={this.state.value >= this.props.data.price ? s.priceInput : s.errInput}
            />
            <Button
              bsStyle="primary"
              onClick={this.clickHandle.bind(this)}
              disabled={this.state.value >= this.props.data.price ? false : true}
            >
              购买
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
  componentDidMount() {
    const self = this;
    this.setState({
      value: self.props.data.price || '',
    });
  }
  changeHandle(e) {
    this.setState({
      value: e.target.value,
    });
  }
  clickHandle() {
    alert('通过MetaMask，打开交易窗口');
  }
}

export default withStyles(s)(MyLargeModal);
