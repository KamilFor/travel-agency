import { shallow } from 'enzyme';
import OrderOption from './OrderOption';
import React from 'react';

import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type={'checkboxes'} name={'a'} />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct name', () => {
    const expectedName = 'abc';

    const component = shallow(<OrderOption name={'abc'} type={'icons'} />);
    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedName);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    // is rendering Component
    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption setOrderOption={mockSetOrderOption} type={type} {...mockProps} {...mockPropsForType[type]} />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        // Drugi test
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }
      case 'icons': {
        it('contains div ', () => {
          const divMain = renderedSubcomponent.find('.main');
          expect(divMain.length).toBe(1);

          const emptyDiv = divMain.find('div[value=""]').length;
          expect(emptyDiv).toBe(1);

          const options = divMain.find('div').find('.icon');

          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('name')).toBe(mockProps.name[0].id);
          expect(options.at(1).prop('name')).toBe(mockProps.name[1].id);
        });

        // Drugi test
        it('should run setOrderOption function on change', () => {
          const divLastClass = renderedSubcomponent.find('div.icon');
          divLastClass.at(1).simulate('click', {});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'checkboxes': {
        // Test for contains
        it('contains div main and labels', () => {
          const divMain = renderedSubcomponent.find('.main');
          expect(divMain.length).toBe(1);

          const emptyOption = divMain.find('label[value=""]').length;
          expect(emptyOption).toBe(0);

          const labels = divMain.find('input').not('[value=""]');

          expect(labels.length).toBe(mockProps.values.length);
          expect(labels.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(labels.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          const divMain = renderedSubcomponent.find('.main');
          const labels = divMain.find('input').not('[value=""]');
          labels.at(1).simulate('change', { currentTarget: { checked: true } });

          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: ['aaa', testValue] });
        });
        break;
      }
      case 'number': {
        it('contains input ', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);

          const emptyInput = input.length;
          expect(emptyInput).toBe(1);

          expect(input.length).toBe(1);
          expect(input.prop('value')).toBe(mockPropsForType.number.currentValue);
        });
        // Drugi test
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValueNumber } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }
      case 'text': {
        it('contains input text', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);

          const emptyInput = input.length;
          expect(emptyInput).toBe(1);

          expect(input.length).toBe(1);
        });
        // Drugi test
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValue } });
          // Ciekawe przy pierwszym input text (Recive = 1)
          // A przy drugim ( Recive = 0 )
          // nie wiem jak to ująć
        });
        break;
      }
      case 'date': {
        it('contains date', () => {
          const datePicker = renderedSubcomponent.find(DatePicker);
          expect(datePicker.length).toBe(1);
          expect(datePicker.length).toBe(0);

          /// Ten sam błąd jak wcześniej ... nie wiem jak go rozwiązać
          // 2 błędy wyskakują przy 0 i 1 ??
        });
        break;
      }
    }
  });
}
