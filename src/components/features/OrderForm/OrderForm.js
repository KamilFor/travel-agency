import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
// Pricing
import pricing from '../../../data/pricing.json';

export default class OrderForm extends Component {
  render() {
    const { tripCost, options, setOrderOption } = this.props;
    return (
      <Grid>
        <Row>
          {pricing.map((item) => {
            const { id } = item;
            return (
              <Col key={id} md={4}>
                <OrderOption {...item} setOrderOption={setOrderOption} currentValue={options[id]} />
              </Col>
            );
          })}
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
  setOrderOption: PropTypes.func,
};
