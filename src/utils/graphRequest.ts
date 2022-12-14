import app from '../index'
import supertest from 'supertest'

const graphQLRequest = (query: string) => {
  return supertest(app)
    .post('/graphql')
    .send({
      query
    })
}

export default graphQLRequest