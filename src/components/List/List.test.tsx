import React from 'react';
import { shallow } from 'enzyme';
import * as BreedContext from '../../hooks/breedProvider';
import List from './List';

describe('List component', () => {
  test('it should mock the context and render List', () => {
    jest
      .spyOn(BreedContext, 'useHandleDetail')
      .mockImplementation(() => () => {});

    const wrapper = shallow(<List breed="husky" />);
    expect(wrapper).toMatchSnapshot();
  });
});
