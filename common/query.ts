import { GraphQLClient } from '@peajs/graphql-client'

const endpoint = process.env.API_HOST + '/graphql'

const graphqlClient = new GraphQLClient(endpoint)

export const query = graphqlClient.query
