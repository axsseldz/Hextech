import Avatar from '@/components/Avatar'
import Feed from '@/components/Feed'
import PostBox from '@/components/PostBox'
import { useRouter } from 'next/router'
import React from 'react'

function SubredditPage() {
    const { query: { topic } } = useRouter()

    return (
        <div className='h-24 bg-blue-500 p-8 '>
            <div className='-mx-8 mt-10 bg-darkGray'>
                <div className='mx-auto flex max-w-5xl items-center space-x-4 pb-3'>
                    <div className='-mt-5'>
                        <Avatar seed={topic as string} large />
                    </div>
                    <div className='py-2'>
                        <h1 className='font-semibold text-3xl text-white'>Welcome to the r/{topic} subreddit</h1>
                        <p className='text-sm text-blue-500'>r/{topic}</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-5 max-w-5xl pb-10">
                <PostBox subreddit={topic as string} />
                <Feed topic={topic as string} />
            </div>
        </div>
    )
}

export default SubredditPage