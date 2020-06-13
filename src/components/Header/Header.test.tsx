import React from 'react';
import { shallow } from 'enzyme';
import * as BreedContext from '../../hooks/breedProvider';
import Header from './Header';

describe('Header component', () => {
  test('it should mock the context and render Header', () => {
    const contextValues = 'husky';
    const handleChangeValue = { target: 'husky' };

    jest
      .spyOn(BreedContext, 'useSearchText')
      .mockImplementation(() => contextValues);

    jest
      .spyOn(BreedContext, 'useHandleChange')
      .mockImplementation(() => handleChangeValue);

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
