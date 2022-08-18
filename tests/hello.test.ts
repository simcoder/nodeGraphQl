import graphQLRequest from "../src/utils/graphRequest";

it('should test graphql by returning greetings from graphql', async () => {
    const greeting = await graphQLRequest(`query { greeting }`)
    expect(greeting.body.data.greeting).toBe('Hello from Ally!');
})