import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' tags={[]} />);
    expect(component).toBeTruthy();
  });

  //   it('should throw error without required props', () => {
  //     expect(() => shallow(<TripSummary />)).toThrow();
  //   });

  it('should render correct name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '100';
    const expectedDays = 5;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);
    expect(component.find('.cost').text()).toEqual('from ' + expectedCost);
    expect(component.find('.days').text()).toEqual(expectedDays + ' days');
  });

  it('renders correct src and alt', () => {
    const correctSrc = 'image.jpg';
    const correctAlt = 'image';

    const component = shallow(<TripSummary name={correctAlt} image={correctSrc} tags={[]} />);
    expect(component.find('.image').prop('src')).toEqual(correctSrc);
    expect(component.find('.image').prop('alt')).toEqual(correctAlt);
  });

  it('renders 3 component in correct order', () => {
    const component = shallow(<TripSummary tags={['a', 'b', 'c']} />);
    expect(component.find('.tag').at(1)).toBeTruthy();
  });

  it('if tags is false do not render', () => {
    const expectedDiv = {};

    const component = shallow(<TripSummary tags={undefined} />);
    expect(component.find('.tags')).toEqual(expectedDiv);
  });
});
