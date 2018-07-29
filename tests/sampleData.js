module.exports = {
  reviews:
    [
      [
        {
          group: 4,
          helpfulCount: 3,
          houseId: 17,
          rating: {
            overall: 4,
            accuracy: 1,
            location: 2,
            communication: 2,
            checkIn: 1,
            cleanliness: 1,
            value: 3
          },
          reportedCount: {
            inappropriate: 5,
            hateful: 6,
            fake: 6
          },
          response: {
            name: "Camron Kuhlman I",
            responseDate: "2018-04-22T05:41:18.557Z",
            responsePicture: "https://s3-us-west-1.amazonaws.com/fec-reviews/8.jpg",
            responseText: "Pariatur ullam vel. Asperiores voluptatum maxime ducimus et consequatur accusantium saepe ipsum."
          },
          reviewDate: "2017-12-16T09:42:45.943Z", 
          reviewText: "Fugiat voluptas et omnis assumenda vero non deleniti repellendus ut. Necessitatibus ipsum quia id sit est consequatur perferendis. Vel quia dolorem quas.",
          reviewTitle: "Voluptate aperiam tenetur vel dolorem quisquam.", 
          user: 68
        }, 
        // user object associated with above review
        {
          avgRating: 3,
          name: "Delmer Mante",
          picture: "https://s3-us-west-1.amazonaws.com/fec-reviews/10.jpg",
          userId: 68
        }
      ],
      [
        {
          group: 2,
          helpfulCount: 1,
          houseId: 84,
          rating: {
            overall: 3,
            accuracy: 2,
            location: 1,
            communication: 4,
            checkIn: 3,
            cleanliness: 4,
            value: 3
          },
          reportedCount: {
            inappropriate: 6,
            hateful: 8,
            fake: 7
          },
          response: {
            name: "Therese Beatty",
            responseDate: "2017-09-16T17:08:06.622Z",
            responsePicture: "https://s3-us-west-1.amazonaws.com/fec-reviews/1.jpg",
            responseText: "Unde fuga enim facere ipsa eaque numquam odit volu… omnis nesciunt. Doloremque inventore blanditiis."
          },
          reviewDate: "2017-07-30T10:25:13.848Z", 
          reviewText: "Libero iste sequi aut esse temporibus aut omnis et tenetur. Cumque alias consectetur laborum ut. Inventore voluptates natus totam. Harum eum voluptas id id expedita.",
          reviewTitle: "Excepturi eum amet.",
          user: 25
        }, 
        // User object associated with above review
        {
          avgRating: 5,
          name: "Orville Ankunding",
          picture: "https://s3-us-west-1.amazonaws.com/fec-reviews/5.jpg",
          userId: 25
        }
      ],
    ],
  // I hit refresh inbetween so these aggregate values aren't the aggregate of the above reviews
  ratings: {
    accuracy: 2.6666666666666665,
    checkIn: 3,
    cleanliness: 3.5, 
    communication: 3.82,
    location: 3,
    overall: 4.333333333333333,
    value: 3.1666666666666665
  }
};