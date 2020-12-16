import React, { Component } from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';

export default class OrderOptionNumber extends Component {
  render() {
    const { currentValue, limits, price, setOptionValue } = this.props;
    return (
      <div className={styles.number}>
        <input
          type='number'
          className={styles.inputSmall}
          value={currentValue}
          min={limits.min}
          max={limits.max}
          onChange={(event) => setOptionValue(event.currentTarget.value)}
        />
        {formatPrice(price)}
      </div>
    );
  }
}

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  limits: PropTypes.object,
  price: PropTypes.string,
  setOptionValue: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};
