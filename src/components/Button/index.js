import React from 'react';
import PropTypes from 'prop-types';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import { SortItems } from '../../actions';

class Buttons extends React.Component {
  static contextTypes = {
    fetch: PropTypes.func.isRequired,
  };
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    this.props.loadAll('all'); //数据初始化 主入口
  }
  render() {
    const { sortitems } = this.props;
    const states = [
      { region: 'all', name: '所有' },
      { region: 'as', name: '亚洲' },
      { region: 'eu', name: '欧洲' },
      { region: 'af', name: '非洲' },
      { region: 'na', name: '北美洲' },
      { region: 'sa', name: '南美洲' },
      { region: 'oc', name: '大洋洲' },
      { region: 'an', name: '南极洲' },
    ];
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
            {states.map((item, index) => (
              <Button
                key={index}
                bsStyle={sortitems.activeTab === item.region ? 'primary' : 'default'}
                onClick={() => {
                  this.onClickHandle(item.region);
                }}
              >
                {item.name}
              </Button>
            ))}
          </ButtonToolbar>
        </div>
      </div>
    );
  }
  onClickHandle = state => {
    this.props.loadAll(state);
  };
}

const mapStateToProps = state => ({
  sortitems: state.sortitems,
});
const mapDispatchToProps = dispatch => {
  return {
    loadAll: (...args) => {dispatch(SortItems.loadAll(...args));},
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Buttons);
