import { GraphQLClient } from '@peajs/graphql-client'

const endpoint = process.env.GQL_ENDPOINT as string
const graphqlClient = new GraphQLClient(endpoint)

export const query = graphqlClient.query
