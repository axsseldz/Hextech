import { GET_POSTS_BY_ID } from '@/graphql/queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Post from '../../components/Post'
import React from 'react'

function PostPage() {
    const { query: { postid } } = useRouter()

    const { data } = useQuery(GET_POSTS_BY_ID, {
        variables: {
            post_id: postid
        }
    })

    const post: Post = data?.postListById[0];

    return (
        <div className='mx-auto my-7 max-w-5xl'>
            <Post post={post} />
        </div>
    )
}

export default PostPage