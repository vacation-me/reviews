import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';

describe('Test rendering of reviews heading', () => {
  test('title equals Review', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('#reviewList').text();
    expect(text).toEqual('Reviews');
  });
});