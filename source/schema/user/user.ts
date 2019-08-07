import { gql } from 'apollo-server';

export const userDefs = gql`
    type User {
        id: String,
        name: String,
        created: Float,
        verified: Boolean,
        link_karma: Int,
        comment_karma: Int,
        is_mod: Boolean,
        icon_img: String
    }

    extend type Query {
        user(name: String): User
    }
`;