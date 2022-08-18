export type Resolver = (parent: any, args: any, info: any, context: any) => any;

export type GraphQLMiddlewareFunc = (resolver: Resolver, parent: any, args: any, info: any, context: any) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}
