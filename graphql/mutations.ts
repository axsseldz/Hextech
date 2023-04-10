import { gql } from "@apollo/client";

export const ADD_POST = gql`
    mutation MyMutation(
        $body: String!
        $image: String!
        $subreddit_id: ID!
        $tittle: String!
        $username: String!
    ){
        insertPost(
            body: $body
            image: $image
            subreddit_id: $subreddit_id
            tittle: $tittle
            username: $username  
        ){
            body
            created_at
            id
            image
            subreddit_id
            tittle
            username
        }
    }
`

export const ADD_COMMENT = gql`
    mutation MyMutation(
        $post_id: ID!
        $text: String!
        $username: String!
    ){
        insertComment(
            post_id: $post_id
            text: $text
            username: $username
        ){
            created_at
            id
            post_id
            text
            username
        }
    }
`

export const ADD_SUBREDDIT = gql`
    mutation MyMutation($topic: String!){
        insertSubreddit(topic: $topic){
            created_at
            id
            topic
        }
    }
`
