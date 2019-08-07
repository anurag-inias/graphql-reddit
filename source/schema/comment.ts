import { gql } from 'apollo-server';

export const commentDefs = gql`
    type Comment @key(fields: permalink) {
        id: String,
        title: String,
        subreddit: String,
        url: String,
        author: String,
        archived: Boolean,
        over_18: Boolean,
        ups: Int,
        downs: Int,
        score: Int,
        permalink: String,
        body: String,
        body_html: String
    }

    extend type Query {
        comment(permalink: String): Comment
    }
`;
