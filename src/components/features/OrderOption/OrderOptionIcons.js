import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({ values, required, setOptionValue }) => (
  <div className='main component'>
    {required ? (
      ''
    ) : (
      <div key='null' value=''>
        ---
      </div>
    )}
    {values.map((value) => (
      <div className={styles.icon} key={value.id} onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon} />
        {value.name}
        {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  map: PropTypes.func,
};

export default OrderOptionIcons;
