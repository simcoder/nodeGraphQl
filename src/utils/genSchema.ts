import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const genSchema = () => {

  // get path to modules
  const modulesPath = path.join(__dirname, '../modules');

  // get graphql files
  const graphqlTypes = glob.sync(`${modulesPath}/**/*.graphql`).map(x => fs.readFileSync(x, { encoding: 'utf8' }));

  // get resolvers
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const resolvers = glob.sync(`${modulesPath}/**/resolvers.?s`).map(resolver => require(resolver).resolvers);

  return makeExecutableSchema({
    typeDefs: mergeTypeDefs(graphqlTypes),
    resolvers: mergeResolvers(resolvers),
  });
};
