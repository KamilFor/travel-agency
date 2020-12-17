import React, { Component } from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

export default class HappyHourAd extends Component {
  constructor() {
    super();
    /* run this.forceUpdate() every second */
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(
      Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0)
    );

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  renderingTime = (promoDescription, noPromoDescription) => {
    if (this.getCountdownTime() > 82800) {
      return promoDescription;
    } else {
      return noPromoDescription;
    }
  };

  render() {
    const { title, promoDescription, noPromoDescription } = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{this.renderingTime(promoDescription, noPromoDescription)}</div>
        <div>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
  noPromoDescription: PropTypes.string,
};
