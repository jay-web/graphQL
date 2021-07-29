import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts: [Contacts]
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Contacts {
        firstName: String
        lastName: String
    }

    
    type Query {
        getFriend(id: ID): Friend  
    }

    input FriendInput {
        id: ID,
        firstName: String
        lastName: String
        gender: Gender
        age:Int
        email: String
        contacts: [ContactsInput]
    }

    input ContactsInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput) : Friend
    }
`)
module.exports = schema
