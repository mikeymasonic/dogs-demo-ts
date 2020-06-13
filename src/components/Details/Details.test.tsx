import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';

describe('Details component', () => {
  it('renders Details', () => {
    const wrapper = shallow(
      <Details breed="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
