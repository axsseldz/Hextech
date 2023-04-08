import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!){
        subredditListByTopic(topic: $topic){
            created_at
            id
            topic
        }
    }
`


export const GET_POSTS = gql`
    query MyQuery{
        postList{
            body
            created_at
            id
            image
            subreddit_id
            tittle
            username
            comments {
                username
                text
                id
                created_at
                post_id
            }
            subreddit {
                topic
                id
                created_at
            }
            votes {
                created_at
                id
                post_id
                upvote
                username
            }
        }
    }
`
