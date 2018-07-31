import React from 'react';
import { shallow } from 'enzyme';
// import App from '../client/components/App.jsx';
import AggregatedReviews from '../client/components/AggregatedReviews';
// import request from 'supertest';
// import app from '../server/index.js';
import styles from './styles/AggregatedStyle.css';
import sampleData from './sampleData.js';
import ReviewList from '../client/components/ReviewList';
import ReviewEntry from '../client/components/ReviewEntry';
import Search from '../client/components/Search';

describe('Check AggregatedReview Component', () => {
  test('Each all 6 review categories to have five star icons each', () => {
    const wrapper = shallow(<AggregatedReviews ratings={sampleData.ratings} />);
    expect(wrapper.find('.starSet').children().length).toBe(30);
  });
  // write test to ensure that for a number, say 3.6, it renders 3 full, 1 empty, and 1 half star
});

describe('Check ReviewList Component', () => {
  test('Should render ReviewEntry for each review', () => {
    const wrapper = shallow(<ReviewList reviews={sampleData.reviews} />);
    expect(wrapper.find('#reviewContainer').children().length).toBe(sampleData.reviews.length);
  });
});

// describe('Check ReviewEntry Component', () => {
//   test('Should reformat the date', () => {
//     const wrapper = shallow(<ReviewEntry rev={sampleData.reviews} />);
//     expect(wrapper.find('#reviewDate').text().split(' ').length).toBe(2);
//     // expect(wrapper.formatDate(sampleData.reviews[0].reviewDate).split(' ').length).toBe(2);
//   });
// });

// If this was a utility function I wouldn't have to test it twice
describe('Check Search Component', () => {
  test('The overall review category has five star icons', () => {
    const wrapper = shallow(<Search ratings={sampleData.ratings} handleSubmit={()=>{}}/>);
    expect(wrapper.find('.starSet').children().length).toBe(5);
  });
  // write test to ensure that for a number, say 3.6, it renders 3 full, 1 empty, and 1 half star
  // write test with sinon to ensure handleSubmit is invoked when form is submitted
});

// describe('Check App Component', () => {
//   test('Test API call in APP Component', () => {
//     request(app).get('/reviews/5').expect(200).end(
//       function(err, res) {
//         if (err) {
//           throw err;
//         }
//       });
//   });
// });