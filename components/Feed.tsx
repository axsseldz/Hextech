import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_POSTS, GET_POSTS_BY_TOPIC } from '../graphql/queries'
import Post from './Post';

type Props = {
    topic?: string
}

function Feed({ topic }: Props) {
    const { data, error } = !topic ? useQuery(GET_POSTS) : useQuery(GET_POSTS_BY_TOPIC, {
        variables: {
            topic: topic
        }
    })

    const posts: Post[] = !topic ? data?.postList : data?.postListByTopic;


    return (
        <div className='mt-5 space-y-4 w-full'>
            {posts?.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div >
    )
}

export default Feed