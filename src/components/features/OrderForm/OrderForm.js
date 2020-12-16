import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
// Pricing
import pricing from '../../../data/pricing.json';

import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import settings from '../../../data/settings';
//funkcja send Order
const sendOrder = (options, tripCost, id) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  console.log(options);

  const payload = {
    ...options,
    country: id.name,
    id: id.alpha2Code,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

export default class OrderForm extends Component {
  render() {
    const { tripCost, options, setOrderOption, id } = this.props;
    console.log(id);
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
            <button onClick={() => sendOrder(options, tripCost, id)}>Order now!</button>
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
  id: PropTypes.object,
};
