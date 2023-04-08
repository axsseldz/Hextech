import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_POSTS } from '../graphql/queries'
import Post from './Post';

function Feed() {
    const { data, error } = useQuery(GET_POSTS)

    const posts: Post[] = data?.postList;


    return (
        <div className='mt-5 space-y-4 w-full'>
            {posts?.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div >
    )
}

export default Feed