import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';

class Alerts extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <Alert bsStyle={this.props.infoType}>{this.props.infoContent}</Alert>
        {/*<Alert bsStyle="danger">未连接，加密国家需要Web3浏览器才能像MetaMask或Mist一样使用。</Alert>*/}
        {/*<Alert bsStyle="danger">您目前正在使用“Ropsten”测试网络。</Alert>*/}
        {/*<Alert bsStyle="danger">您目前正在使用“私人”测试网络。</Alert>*/}
        {/*<Alert bsStyle="info">载入中...从区块链世界读取状态。</Alert>*/}
        {/*<Alert bsStyle="success">Cities are going live! Join the discussion in our Discord.</Alert>*/}
      </div>
    );
  }
}

export default Alerts;
