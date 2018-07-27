import React from 'react';
import { shallow, mount} from 'enzyme';
import App from '../client/components/App.jsx';
import AggregatedReviews from '../client/components/AggregatedReviews';

const ratings = {
  accuracy: 2.6666666666666665,
  checkIn: 3,
  cleanliness: 3.5, 
  communication: 3.1666666666666665,
  location: 3,
  overall: 4.333333333333333,
  value: 3.1666666666666665
};

describe('Check AggregatedReviewComponent', () => {
  test('Each all 6 review categories to have five star icons each', () => {
    const wrapper = mount(<AggregatedReviews ratings={ratings} />);
    expect(wrapper.find('.starSet').children().length).toEqual(30);
  });
});