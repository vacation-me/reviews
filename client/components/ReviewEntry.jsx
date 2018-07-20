import React from 'react';

const ReviewEntry = (props) => {
  console.log(props);

  return (
    <div>
      <img src={props.rev[1].picture} />
      <div>{props.rev[1].name}</div>
      <div>{props.rev[0].reviewDate}</div>
      <div>{props.rev[0].reviewText}</div>
    </div>
  );
};

export default ReviewEntry;