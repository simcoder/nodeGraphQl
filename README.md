
# Ally(Strata) GraphQL Assignment

Hello,

Thank you for taking the time to complete the Ally GraphQL assignment. Please only spend
a maximum of 1 hour on this assignment.



## Summary

This is a boilerplate of a GraphQL project running Apollo Server Express. We have two primary goals to achieve 
in this project:

1.) Create a "customers" resolver that makes an API call to https://randomuser.me/api/ and returns an expected payload. The expected payload has the following criteria(can also be found in jest tests):

- When querying for customers I should expect to see an array of customers containing at least one customer
- The fields we should see in the response are: email, gender, phone, name(object)
```json
Array [
  Object {
    "email": "rick.nelson@example.com",
    "gender": "male",
    "name": Object {
      "title": "Mr."
      "first": "Rick",
      "last": "Jones"
    },
    "phone": "07-5547-3385",
  },
]
```
- The results from this API are always randomized but the payload we expect back should always be the same structure(properties)

2.) All test cases pass successfully.

- The first test case will test the customers resolver/query
- The second test case will test a minor typo/bug that already exists in the code

You can run the tests by running `npm run test`

## Getting started

Open the project and install dependencies with `npm install` \
Run the project using `npm run dev` \
Test the project using `npm run test`

## Restrictions

All of your changes should happen under the "modules" folder. The utils, index file, helpers etc. should not be touched. 

There are no library restrictions on how this project is solved. If you want to use other libraries please feel free to. 

## Questions

Please reach out to me at john.kranz@ally.com if you have any questions