import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { LinkIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { useForm } from "react-hook-form";

type FormData = {
    postTittle: string
    postBody: string
    postImage: string
    subreddit: string
}

function PostBox() {
    const { data: session } = useSession()
    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)

    const onSubmit = handleSubmit(async (formData) => {
        console.log(formData)
    })

    return (
        <form onSubmit={onSubmit} className='sticky top-16 z-50 p-2 rounded-md bg-slate-600 border border-gray-300'>

            <div className='flex items-center space-x-2'>
                <Avatar />
                <input
                    {...register('postTittle', { required: true })}
                    disabled={!session}
                    className='flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none'
                    type='text'
                    placeholder={session ? 'Create a post by entering a tittle' : 'Sign in to post'}
                />
                <PhotoIcon onClick={() => setImageBoxOpen(!imageBoxOpen)} className={`icon ${imageBoxOpen && 'text-blue-500'}`} />
                <LinkIcon className='icon' />
            </div>

            {!!watch('postTittle') && (
                <div className='flex flex-col py-2'>
                    <div className='flex items-center px-2'>
                        <p className='min-w-[90px]'>Body:</p>
                        <input
                            type="text"
                            {...register('postBody')}
                            placeholder='text (optional)'
                            className='m-2 p-2 flex-1 bg-blue-200 outline-none'
                        />
                    </div>
                    <div className='flex items-center px-2'>
                        <p className='min-w-[90px]'>Subreddit:</p>
                        <input
                            type="text"
                            {...register('subreddit', { required: true })}
                            placeholder='i.e. reactjs'
                            className='m-2 p-2 flex-1 bg-blue-200 outline-none'
                        />
                    </div>

                    {imageBoxOpen && (
                        <div className='flex items-center px-2'>
                            <p className='min-w-[90px]'>Image:</p>
                            <input
                                type="text"
                                {...register('postImage')}
                                placeholder='Optional...'
                                className='m-2 p-2 flex-1 bg-blue-200 outline-none'
                            />
                        </div>
                    )}

                    {Object.keys(errors).length > 0 && (
                        <div>
                            {errors.postTittle?.type === 'required' && (
                                <p className='text-red-500'>-A Post tittle is required</p>
                            )}
                            {errors.subreddit?.type === 'required' && (
                                <p className='text-red-500'>-A Subreddit tittle is required</p>
                            )}
                        </div>
                    )}

                    {!!watch('postTittle') && (
                        <button
                            className='w-full rounded-full bg-blue-500 p-2 text-white'
                            type='submit'
                        >
                            Create Post
                        </button>
                    )}

                </div>
            )}

        </form>
    )
}

export default PostBox