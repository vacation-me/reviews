# Reviews microservice for vacation-me 

> A dynamic component for reviews on a vacation rental site

## Related Projects

  - https://github.com/vacation-me/details
  - https://github.com/vacation-me/bookings

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## CRUD API Usage

> Send all AJAX requests to '/reviews/:listingId' where listingId is the currently-viewed listing's houseId

>To read a dataset from the database, send a HTTP GET request with url endpoint '/reviews/:listingId'

>To add a dataset to the database, send a HTTP POST request with url endpoint '/reviews/:listingId' and a request body shaped as a JSON object with the following format:
```sh
{    
  "reviewTitle": "new Review",
  "reviewText": "new Review",
  "reviewDate": "2017-10-17T18:14:16.456Z"
}
```
>To update a dataset in the database, send a HTTP PUT request with url endpoint '/reviews/:listingId' and a request body shaped as a JSON object with the following format with the updated information:
```sh
{
  "reviewText": "Updated Review"
}
```

>To delete a dataset from the database, send a HTTP DELETE request with url endpoint '/reviews/:listingId'

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

