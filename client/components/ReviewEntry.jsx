import React from 'react';
import styles from './styles/EntryStyle.css';

const ReviewEntry = (props) => {

  const formatDate = function (date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let newDate;
    newDate = date.slice(0, date.indexOf('T'));
    newDate = newDate.split('-');
    // console.log(newDate);
    let month = months[newDate[1] - 1];
    // console.log(month);
    let finalString = `${month} ${newDate[0]}`;
    return finalString;
  };

  return (
    <div id={styles.entryContainer}>
      <img src={props.rev.picture} id={styles.reviewAvatar} />
      <div id={styles.reviewName}>{props.rev.name}</div>
      <div id={styles.reviewDate}>{props.rev.reviewdate}</div>
      <div id={styles.reviewText}>{props.rev.reviewtext}</div>
      <div id={styles.reviewFlag}><img id={styles.flagIcon} src='https://s3-us-west-1.amazonaws.com/fec-reviews/flag.svg' /></div>
      <div id={styles.reviewBorder}></div>
    </div>
  );
};

export default ReviewEntry;