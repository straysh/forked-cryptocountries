import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import * as ImagePng from '../../../public/country-flags/countryFlag';
import * as ImageSvg from '../../../public/mapsvg/mapSvg';
import s from './Modal.scss';

import Web3 from 'web3';

import ABI from '../../../ganache/build/contracts/Info';

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
              <Image src={ImagePng[data.code]} responsive />
              <span>{data.name}</span>
              <small>刷新</small>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={s.content}>
            <div className={s.left}>
              <div className={s.countryCardBg}>
                <Image src={ImageSvg[data.code]} responsive />
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
                The next price someone can purchase this country for is{' '}
                {data.nextPrice}
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
              className={
                this.state.value >= data.price ? s.priceInput : s.errInput
              }
            />
            <Button
              bsStyle="primary"
              onClick={this.clickHandle.bind(this)}
              disabled={!(this.state.value >= data.price)}
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
    // Is there is an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // If no injected web3 instance is detected, fallback to Ganache.
      App.web3Provider = new web3.providers.HttpProvider(
        'http://127.0.0.1:7545',
      );
      web3 = new Web3(App.web3Provider);
    }
    const contract = new web3.eth.Contract(
      ABI.abi,
      '0x538c98e0d41418bccda0c170f62a39389f6e40b1',
    );

    // web3.eth.getAccounts(function(error, accounts) {
    //   if (error) {
    //     console.log(error);
    //   }
    //
    //   let account = accounts[0];

    // App.contracts.Adoption.deployed().then(function(instance) {
    //   // 发送交易领养宠物
    //   // return instance.adopt(petId, {from: account});
    // }).then(function(result) {
    //   // return App.markAdopted();
    //   console.log(result);
    // }).catch(function(err) {
    //   console.log(err.message);
    // });
    // });

    // contract.methods.priceOf(410).call().then(function (result) {
    //   console.log(result);
    // }).catch(function (error) {
    //   console.log(error.message);
    // });

    // 写入有问题 先不理metamask问题
    // contract.methods.buy(410).send({
    //   from: '0x6A196D55463A576bd5f13Ff1F16a634E822B2308',
    // }).then(function(result){
    //   console.log(result);
    // }).catch(function (error) {
    //   console.log(error.message);
    // });

    // contract.methods.owner().call().then(function (result) {
    //   console.log(result);
    // }).catch(function (error) {
    //   console.log(error.message);
    // });
  }
}

export default withStyles(s)(MyLargeModal);
