    // server/src/schema.js

    const typeDefs = `
      type Score {
        id: Int!
        name: String!
        points: Int!
        operation: String!
      }
      type Query {
        scores: [Score]
      }

      type Mutation {
        sendScore(name: String!, points: Int!, operation: String!): Score
      }

      type Subscription {
        newScores: [Score]
      }
    `
    module.exports = typeDefs