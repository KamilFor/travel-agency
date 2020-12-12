import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './OrderSummary.scss';
// import functions
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
// {}

export default class OrderSummary extends Component {
  render() {
    const { tripCost, options } = this.props;
    return (
      <div>
        <h2 className={styles.component}>
          Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
        </h2>
      </div>
    );
  }
}

OrderSummary.propTypes = {
  tripCost: PropTypes.number,
  options: PropTypes.object,
};
