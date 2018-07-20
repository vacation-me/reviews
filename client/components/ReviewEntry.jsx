import React from 'react';

const ReviewEntry = (props) => {
  console.log(props);

  return (
    <div>
      <img src={props.rev[1].picture} />
    </div>
  );
};

export default ReviewEntry;