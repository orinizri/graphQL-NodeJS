import { createServer } from '@graphql-yoga/node'

const users = [
    {
        id: '1',
        name: "Andrew",
        email: "andrew@example.com"
    },
    {
        id: '2',
        name: "Sarah",
        email: "sarah@sarah.com"
    }
]

const typeDefs =
    `
type Query {
    me: User!
    post: Post!
    users(query: String): [User!]!
}
type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
}
type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
}`;
const query = {
    users(p, args, ctx, info) {
        if (!args.query) return users;
        return users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()))
    },
    me() {
        return {
            id: "123a",
            name: "mike",
            email: "mike@example",
            age: 32
        }
    },
    post() {
        return {
            id: '123',
            title: 'robin hood',
            body: 'bla bla bla',
            published: true
        }
    }
};
const server = createServer({
    schema: {
        typeDefs,
        resolvers: {
            Query: query
        }
    }
});

server.start();