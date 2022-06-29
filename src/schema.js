const { gql } = require('apollo-server')

const typeDefs = gql`
    type Task {
        id: ID!
        name: String!
        status: String
    }
    
    type Query {
        tasks: [Task!]!
        task(id: ID!): Task
    }
    
    type Mutation {
        addTask(name: String!, status: String!): Task!
    }
`

module.exports = {
    typeDefs,
}