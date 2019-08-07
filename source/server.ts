import { ApolloServer, gql } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

import { userDefs } from './schema/user';
import { commentDefs } from './schema/comment';
import { userResolvers, userQueryResolver } from './resolvers/user';
import { commentResolvers, commentQueryResolver } from './resolvers/comment';

const typeDefs = gql`
  ${userDefs}
  ${commentDefs}
`;


const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers: {
        Query: {
          ...userQueryResolver,
          ...commentQueryResolver
        },
        ...userResolvers,
        ...commentResolvers
      }
    }
  ])
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});