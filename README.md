# Shopflo assignment

## Set-up and run

Must have Node.js installed

### Frontend

- cd \*/shopflow-assignment
- npm install
- npm run dev

### Backend

- cd \*/shopflow-assignment/backend
- npm install
- npm devstart

## Assumptions

- user input is valid
  - both fields are non empty when creating a post
  - uniqueid field is non empty when analyzing
  - unique identification is a number not used with a post before
  - content is text

## Scalability modifications done:
- using a algorithm of linear time complexity for analysis calls

## Scalibility potential changes:
- override default document id
- Use redis to cache analysis calls
- Store analysis of a post when it is created
  (there would be a memory trade-off for this)
- Use load-balancing

## Technologies used

- React
- Bootstrap 5 (css library)
- express js
- Mongo DB
