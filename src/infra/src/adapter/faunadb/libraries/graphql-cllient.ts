import { GraphQLClient } from 'graphql-request'
import { getSdk } from 'schema'

const { FAUNA_ACCESS_KEY_ADMIN } = process.env;

console.info("FAUNA_ACCESS_KEY_ADMIN", FAUNA_ACCESS_KEY_ADMIN)
const client = new GraphQLClient('https://graphql.fauna.com/graphql', {
  headers: {
    Authorization: 'Bearer '+ FAUNA_ACCESS_KEY_ADMIN    
  }
})
const sdk = getSdk(client)

export { sdk }
