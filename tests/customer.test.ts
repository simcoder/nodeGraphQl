import graphQLRequest from "../src/utils/graphRequest";

const customerTestObj = [
    {
    gender: expect.any(String),
    name: {
        title: expect.any(String),
        first: expect.any(String),
        last: expect.any(String)
    },
    email: expect.any(String),
    phone: expect.any(String),
    }
];

it('should return an array of customers', async () => {
    const customers = await graphQLRequest(`
    query Customers {
        customers {
            gender
            name {
                title
                first
                last
            }
            email
            phone
        }
      }
    `)
    expect(customers.body.data.customers).toMatchObject(customerTestObj);
})