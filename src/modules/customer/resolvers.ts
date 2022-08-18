import { ResolverMap } from "../../types/graphql-utils";
import fetch from "node-fetch"; // use node-fetch
import { Customer } from "./types";

export const resolvers: ResolverMap = {
  Query: {
    // implment customers resolver here
    customers: async (parent, args, context, info) => {
      let result: Customer[] = [];
      await fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.results)) {
              result = [...json?.results as Customer[]];
          }
        });
      return result;
    },
  },
};
