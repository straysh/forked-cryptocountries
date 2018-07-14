/* eslint-disable import/first */
import React from 'react';
import Link from '../../Link';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';

class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const data = this.props.data;
    const tooltip = (
      <Tooltip id="tooltip">
        Countries: <strong>{data.countries}</strong>，Value:{' '}
        <strong>{data.value}</strong>
      </Tooltip>
    );
    return (
      <OverlayTrigger placement="top" overlay={tooltip}>
        <Button bsStyle="default">
          {data.id}.{data.name}
        </Button>
      </OverlayTrigger>
    );
  }
}

export default Item;
