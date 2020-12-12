import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

export default class OrderForm extends Component {
  render() {
    const { tripCost, options } = this.props;
    console.log(options);
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
