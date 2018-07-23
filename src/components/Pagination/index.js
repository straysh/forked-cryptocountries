import React from 'react';
import Pagination from 'react-bootstrap/lib/Pagination';

class Paginations extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const self = this;
    const cur = self.props.activePage;
    const size = 5;
    const total = Math.ceil(self.props.totalNumber / size);
    const pageNum = []; // 显示分页按钮
    let begin;
    let len;
    if (total > size) {
      len = size;
      if (cur >= total - 2) {
        begin = total - 4;
      } else if (cur <= 3) {
        begin = 1;
      } else {
        begin = cur - 2;
      }
    } else {
      len = total;
      begin = 1;
    }
    // 根据返回的总记录数计算当前页显示的数据
    for (let i = 0; i < len; i++) {
      const showI = begin + i;
      if (cur === showI) {
        pageNum.push({ num: showI, cur: true });
      } else {
        pageNum.push({ num: showI, cur: false });
      }
    }
    return (
      <Pagination bsSize="large">
        <Pagination.First onClick={this.props.pageClick.bind(this,1)} />
        <Pagination.Prev onClick={this.goPrev.bind(this)} />
        {cur > 3 && <Pagination.Ellipsis />}
        {pageNum.map((curPageNum, index) => (
          <Pagination.Item key={index} onClick={self.props.pageClick.bind(self, curPageNum.num)} className={curPageNum.cur?'active':''}>
            {curPageNum.num}</Pagination.Item>
        ))}
        {cur < (total-2) && <Pagination.Ellipsis />}
        <Pagination.Next onClick={this.goNext.bind(this,total)} />
        <Pagination.Last onClick={this.props.pageClick.bind(this,total)} />
      </Pagination>
    );
  }
  goPrev() {
    const self = this;
    const cur = this.props.activePage;
    if (cur > 1) {
      self.props.pageClick(cur - 1);
    }
  }
  goNext(totalPg) {
    const self = this;
    const cur = self.props.activePage;
    if (cur < totalPg) {
      self.props.pageClick(cur + 1);
    }
  }
}
export default Paginations;
