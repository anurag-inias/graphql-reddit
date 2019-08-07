import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

import { userDefs } from './schema/user/user';
import { userResolvers, userQueryResolver } from './resolvers/user';

const typeDefs = gql`
  ${userDefs}
`;


const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers: {
        Query: {
          ...userQueryResolver
        },
        ...userResolvers
      }
    }
  ])
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});