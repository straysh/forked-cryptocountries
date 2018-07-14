/* eslint-disable import/first,no-unused-vars,prefer-destructuring */
import React from 'react';
import Link from '../../Link';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import ImageUrl from '../../../../public/countries/au.svg';
import ImageUrl2 from '../../../../public/countries/au.png';

import ModalCompoent from '../../../components/Modal';

class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const data = this.props.data;
    return (
      <Col xs={6} md={3}>
        <Thumbnail
          src={ImageUrl}
          alt="242x200"
          className="hehe"
          style={{ backgroundColor: '#000000' }}
        >
          <div>
            <img src={ImageUrl2} style={{ height: '40px' }} />
          </div>
          <h4>{data.name}</h4>
          {/* <Link to={`/country/${data.id}`}>OWNER:{data.owner}</Link> */}
          <p>OWNER:{data.owner}</p>
          <p>首都，语言</p>
          <p>
            {data.capital},{data.language}
          </p>
          <p>人口，货币</p>
          <p>
            {data.population},{data.currency}
          </p>
          <p>
            <span>{data.price}</span>
          </p>
          <ModalCompoent />
        </Thumbnail>
      </Col>
    );
  }
}

export default Item;
