import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer.js';
const TitlesOfComponents = {
  title: '.title',
  date: '.date',
  test: '.test',
};

const Props = {
  days: '100',
  summerStartDate: '2021-06-21',
  summerEndDate: '2021-09-23',
  summerDate: '2021-06-22',
  summerDateBefore: '2021-05-22',
  summerDateAfter: '2021-11-22',
  OneDayBeforeSummer: '2021-06-20',
};

// Funkcja date
const checkDateSummer = (time, expectedDate) => {
  it(`should show correct at ${time}`, () => {
    const component = shallow(<DaysToSummer test={time} />);
    const renderedDate = component.find(TitlesOfComponents.test).text();
    expect(renderedDate).toEqual(expectedDate);
  });
};

describe('Component daysToSummer', () => {
  // Render
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  // Render hader
  it('should render heading', () => {
    const component = shallow(<DaysToSummer {...Props} />);

    expect(component.exists('.title')).toEqual(true);
  });

  //   it('should render correct props', () => {
  //     const component = shallow(<DaysToSummer {...Props} />);
  //     // Commented because its working, but checking other test options
  //     // expect(component.find(TitlesOfComponents.title).text()).toEqual(`${Props.days} days to summer`);
  //   });
});

describe('Check date while is Summer', () => {
  checkDateSummer(Props.summerDate, '');
  checkDateSummer(Props.summerStartDate, '');
  checkDateSummer(Props.summerEndDate, '');
  checkDateSummer(Props.summerDateBefore, '30 days to summer');
  checkDateSummer(Props.summerDateAfter, '211 days to summer');
});

// Test if is one day before summer

describe('Check date while is Summer', () => {
  checkDateSummer(Props.OneDayBeforeSummer, '1 day to summer');
});
