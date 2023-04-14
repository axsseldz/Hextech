import { GET_POSTS_BY_ID } from '@/graphql/queries'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Post from '../../components/Post'
import React from 'react'
import { useSession } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ADD_COMMENT } from '@/graphql/mutations'
import { toast } from 'react-hot-toast'
import Avatar from '@/components/Avatar'
import TimeAgo from 'react-timeago'

type FormData = {
    comment: string
}

function PostPage() {
    const { query: { postid } } = useRouter()
    const { data: session } = useSession();
    const [addComment] = useMutation(ADD_COMMENT, {
        refetchQueries: [GET_POSTS_BY_ID, 'postListById'],
    })

    const { data } = useQuery(GET_POSTS_BY_ID, {
        variables: {
            post_id: postid
        }
    })

    const post: Post = data?.postListById[0];

    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        console.log(formData)

        const notification = toast.loading('Posting your comment...')

        await addComment({
            variables: {
                post_id: postid,
                text: formData.comment,
                username: session?.user?.name
            }
        })

        setValue('comment', '')

        toast.success('Comment posted!', {
            id: notification
        })
    }

    return (
        <div className='mx-auto my-7 max-w-5xl border-0 hover:border-0'>
            <Post post={post} noBorder={true} />

            <div className='-mt-1 rounded-b-md border border-t-0 border-slate-600 bg-darkGray p-5 pl-16'>
                <p className='text-sm text-white'>
                    Comment as <span className='text-reactBlue'>{session?.user?.name}</span>
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2'>
                    <textarea
                        {...register('comment')}
                        className='h-24 rounded-md bg-lightGray text-gray-400 p-2 pl-4 outline-none'
                        disabled={!session}
                        placeholder={
                            session ? 'What are your thoughts?' : 'You need to be signed in to comment'
                        }
                    />
                    <button
                        type='submit'
                        className='rounded-full bg-blue-500 hover:bg-blue-400 p-3 text-semibold text-white'
                    >
                        Comment
                    </button>
                </form>
            </div>

            <div className='-my-5 rounded-b-md border border-t-0 border-slate-600 bg-darkGray py-5 px-10'>
                <hr className='py-2' />
                {post?.comments.map(comment => (
                    <div
                        className='flex items-center space-x-2 space-y-5'
                        key={comment.id}
                    >
                        <div className='z-50'>
                            <Avatar />
                        </div>

                        <div className='flex flex-col'>
                            <p className='py-2 text-xs text-gray-500'>
                                <span className='font-semibold text-reactBlue'>
                                    {comment.username}
                                </span>{' '}
                                • <TimeAgo date={comment.created_at} />
                            </p>
                            <p className='text-white'>{comment.text}</p>

                        </div>


                    </div>
                ))}
            </div>

        </div>
    )
}

export default PostPage