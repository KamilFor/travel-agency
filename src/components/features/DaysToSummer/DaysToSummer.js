import React, { Component } from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends Component {
  checkDate = (summerDate) => {
    // actual data in MS
    const dateToWork = new Date(`${summerDate}T00:00:00.000`).getTime();
    // Start and End of summer in MS
    const summerStart = new Date('2021-06-21T00:00:00.00').getTime();
    const summerStart2022 = new Date('2022-06-21T00:00:00.00').getTime();
    const summerEnd = new Date('2021-09-23T00:00:00.00').getTime();
    const oneDay = 86400000;
    if (dateToWork >= summerStart - oneDay && dateToWork < summerStart) {
      return '1 day to summer';
    } else if (dateToWork < summerStart) {
      //Execute Function to check how much days is into Summer
      return `${this.howMuchDaysToSummer(dateToWork, summerStart)} days to summer`; // Return (Return of function above)
    } else if (dateToWork > summerEnd) {
      //Execute Function to check how much days is into Summer
      // REMEMBER IF YOU EXECUTE IT HERE ADD DATE TO NEXT SUMMER
      return `${this.howMuchDaysToSummer(dateToWork, summerStart2022)} days to summer`;
    } else if (dateToWork >= summerStart) {
      // Cleaning h3 with date
      return '';
    }
  };

  howMuchDaysToSummer = (dateToWork, summerStart) => {
    const oneDayMS = 1000 * 3600 * 24;
    let Result = Math.round(summerStart - dateToWork) / oneDayMS;
    let FinalResult = Result.toFixed(0);
    return FinalResult;
  };

  render() {
    const { test } = this.props;
    const summerDate = new Date().toISOString().split('T')[0];
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.checkDate(summerDate)}</h3>
        <h3 className='test'>{this.checkDate(test)}</h3>
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  test: PropTypes.string,
};

export default DaysToSummer;
