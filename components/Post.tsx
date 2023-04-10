import React from 'react'
import { ArrowDownIcon, ArrowUpIcon, BookmarkIcon, ChatBubbleLeftIcon, EllipsisHorizontalCircleIcon, GifIcon, ShareIcon } from '@heroicons/react/24/outline'
import Avatar from './Avatar'
import TimeAgo from 'react-timeago'
import Link from 'next/link'
import { Jelly } from '@uiball/loaders'

type Props = {
    post: Post
}

function Post({ post }: Props) {
    if (!post) {
        return (
            <div className='flex w-full items-center justify-center p-10 text-xl'>
                <Jelly size={50} color='#3c82f6' />
            </div>
        )
    }


    return (
        <div>
            <Link href={`/post/${post.id}`}>
                <div className='flex cursor-pointer rounded-md bg-darkGray border border-slate-600 hover:border '>

                    {/* Votes */}
                    <div className='flex flex-col items-center justify-start space-y-1 rounded-l-md p-4 text-white'>
                        <ArrowUpIcon className='voteButtons bg-lightGray text-red-400' />
                        <p>0</p>
                        <ArrowDownIcon className='voteButtons bg-lightGray text-blue-400' />
                    </div>

                    <div className='p-3 pb-1'>
                        {/* Header */}
                        <div className='flex items-center space-x-2'>
                            <Avatar seed={post.subreddit[0]?.topic} />
                            <p className='text-xs text-gray-400'>
                                <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
                                    <span className='font-bold text-white hover:text-reactBlue hover:underline'>
                                        r/{post.subreddit[0]?.topic}
                                    </span>
                                </Link>{' '}
                                • Posted by u/
                                {post.username} <TimeAgo date={post.created_at} />
                            </p>
                        </div>

                        {/* Body */}
                        <div className='py-4'>
                            <h2 className='text-xl font-semibold text-white'>{post.tittle}</h2>
                            <p className='mt-2 text-sm font-light text-white'>{post.body}</p>
                        </div>

                        {/* Image */}
                        <img src={post.image} className='w-full' />

                        {/* Footer */}
                        <div className='flex space-x-2 text-gray-400'>
                            <div className='postButtons hover:bg-lightGray'>
                                <ChatBubbleLeftIcon className='h-6 w-6' />
                                <p className=''>{post.comments.length} Comments</p>
                            </div>

                            <div className='postButtons hover:bg-lightGray'>
                                <GifIcon className='h-6 w-6' />
                                <p className='hidden sm:inline'>Award</p>
                            </div>

                            <div className='postButtons hover:bg-lightGray'>
                                <ShareIcon className='h-6 w-6' />
                                <p className='hidden sm:inline'>Share</p>
                            </div>

                            <div className='postButtons hover:bg-lightGray'>
                                <BookmarkIcon className='h-6 w-6' />
                                <p className='hidden sm:inline'>Save</p>
                            </div>

                            <div className='postButtons hover:bg-lightGray'>
                                <EllipsisHorizontalCircleIcon className='h-6 w-6' />
                            </div>
                        </div>

                    </div>

                </div>
            </Link>
        </div>
    )
}

export default Post