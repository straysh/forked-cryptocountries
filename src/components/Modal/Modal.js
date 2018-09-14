import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import * as ImagePng from '../../../public/country-flags/countryFlag';
import * as ImageSvg from '../../../public/mapsvg/mapSvg';
import s from './Modal.scss';
import web3js from 'utils/web3';
import Web3 from "web3";
import ABI from '../../../ganache/build/contracts/Info';

class MyLargeModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: '', id: '' };
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
                <strong>{web3js.parsePrice(data.price)} ETH</strong> from
                <Button bsStyle="primary" bsSize="xsmall">
                  {data.owner}
                </Button>
              </p>
              <p>
                The next price someone can purchase this country for is{' '}
                <strong>{web3js.parsePrice(data.nextPrice)} ETH</strong>
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
              placeholder="价格是ETH"
              onChange={this.changeHandle.bind(this)}
              value={this.state.value}
              className={
                this.state.value >= web3js.parsePrice(data.price) ? s.priceInput : s.errInput
              }
            />
            <Button
              bsStyle="primary"
              onClick={this.clickHandle.bind(this)}
              disabled={!(this.state.value >= web3js.parsePrice(data.price))}
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
      value: web3js.parsePrice(self.props.data.price) || '',
      id: self.props.data.itemId,
    });
  }

  changeHandle(e) {
    this.setState({
      value: e.target.value,
    });
  }

  clickHandle() {
    if (typeof web3 !== 'undefined') {
      // 使用 Mist/MetaMask 的提供者
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(window.web3.currentProvider);
    } else {
      // 处理用户没安装的情况， 比如显示一个消息
      // 告诉他们要安装 MetaMask 来使用我们的应用
      return;
      // App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
      // web3 = new Web3(App.web3Provider);
    }
    const contract = new web3.eth.Contract(
      ABI.abi,
      '0x38dca6c292a31767c45b50eb9ba548c046f1859f',
    );
    // console.log(this.state.value);
    let itemId = this.state.id;
    contract.methods.nextPriceOf(itemId).call().then(function (result) {
      let value = result; // this.state.value; //直接用nextPrice作为交易价格
      if (itemId && value) {
        web3.eth.getAccounts().then(accounts => {
          let account = accounts[0];
          //todo 购买写入区块链 metamask有问题
          contract.methods.buy(itemId).send({
            from: account,
            value: value, //web3.utils.toWei(value, 'ether'),
          }).then(function(receipt){
            //如果成功了执行
            console.log(receipt,'666');
          }).catch(function (error) {
            console.log(error.message);
          });
        });
      }
      // console.log(web3.utils.toWei('0.001', 'ether')); //1000000000000000

    }).catch(function (error) {
      console.log(error.message);
    });


  }
}

export default withStyles(s)(MyLargeModal);
