import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    console.log('currentValuetrue', currentValue);
    return [...currentValue, id];
  } else {
    console.log('currentValuefalse', currentValue);
    return currentValue.filter((value) => value != id);
  }
};

const OrderOptionCheckboxes = ({ values, currentValue, setOptionValue }) => (
  <div className={styles.checkboxes}>
    {values.map((value) => (
      <label className={styles.icon} key={value.id}>
        <input
          type='checkbox'
          value={value.id}
          onChange={(event) => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name}
        {name.price}
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.object,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  map: PropTypes.node,
};

export default OrderOptionCheckboxes;
