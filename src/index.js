import { createServer } from '@graphql-yoga/node'

// type definitions
const schema = {
    typeDefs : `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: boolean!
    }`
}
// resolver
const resolvers = {
    Query: {
        title() {
            return "The War of Art"
        },
        price() {
            return 17.5
        },
        releaseYear() {
            return null
        },
        rating() {
            return 5
        },
        inStock() {
            return true
        }
    }
}
const server = createServer({schema, resolvers});

server.start();