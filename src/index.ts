import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { genSchema } from './utils/genSchema';
import { applyExtensions } from '@graphql-tools/merge';

const app = express()

async function startServer() {
    const server = new ApolloServer({
        schema: genSchema() as any,
        debug: true
    });
    await server.start();
    server.applyMiddleware({ app });
}

startServer();

export default app