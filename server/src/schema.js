const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        "Query to get tracks array for thehomepage grid"
        tracksForHome: [Track!]!
    }
    
    "A track is a group of module that teaches about a specific topic"
    type Track {
        id: ID!
        "the tracks's title"
        title: String!
        "the tracks's man author"
        author: Author!
        "the tracks's main illustration to display in track card or track page detail"
        thumbnail: String
        "the tracks's approximate length to complete, in minutes"
        length: Int
        "the number of modules this track contains"
        modulesCount: Int
    }

    "Author of a complete track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture URL"
        photo: String
    }
`;

module.exports = typeDefs;