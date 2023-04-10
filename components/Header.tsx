import React from 'react'
import Image from 'next/image';
import { BeakerIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, BellIcon, ChatBubbleLeftIcon, GlobeAltIcon, MegaphoneIcon, PlusIcon, SparklesIcon, UserCircleIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';



function Header() {
    const { data: session } = useSession();

    return (
        <div className='flex sticky top-0 z-50 bg-darkGray px-4 py-2'>
            <div className='w-52 cursor-pointer flex-shrink-0 flex items-center space-x-2'>
                <Link href="/">
                    <Image
                        priority
                        width={25}
                        height={25}
                        alt='icon'
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                    />
                </Link>
                <Link href="/">
                    <p className='flex-1 text-white font-bold text-xl'>Hextech</p>
                </Link>
            </div>
            <form className='flex flex-1 items-center space-x-2 px-2 my-1 rounded-md hover:bg-lightGray'>
                <MagnifyingGlassIcon className='icon hover:text-reactBlue' />
                <input type='text' placeholder='Search Hextech' className='flex-1 bg-transparent outline-none text-gray-500' />
            </form>
            <div className='items-center hidden lg:inline-flex'>
                <SparklesIcon className='icon hover:text-reactBlue' />
                <GlobeAltIcon className='icon hover:text-reactBlue' />
                <VideoCameraIcon className='icon hover:text-reactBlue' />
                <hr className='h-10 border border-borderColor' />
                <ChatBubbleLeftIcon className='icon hover:text-reactBlue' />
                <BellIcon className='icon hover:text-reactBlue' />
                <PlusIcon className='icon hover:text-reactBlue' />
                <MegaphoneIcon className='icon hover:text-reactBlue' />
            </div>
            <div className='flex items-center lg:hidden'>
                <Bars3Icon className='icon hover:text-reactBlue' />
            </div>

            {session ? (
                <div
                    onClick={() => signOut()}
                    className='hidden cursor-pointer items-center space-x-2 shrink-0 border hover:border-reactBlue px-3 rounded-lg my-1 lg:flex'>
                    <BeakerIcon className='icon text-reactBlue' />
                    <div className='flex-1 text-xs'>
                        <p className='text-white truncate'>{session?.user?.name}</p>
                        <p className='text-gray-400'>1 Karma</p>
                    </div>
                    <ChevronDownIcon className='icon' />
                </div>

            ) : (
                <div
                    onClick={() => signIn()}
                    className='hidden cursor-pointer items-center space-x-2 shrink-0 border hover:border-reactBlue px-2 rounded-lg my-1 lg:flex'>
                    <UserCircleIcon className='icon text-reactBlue m-0' />
                    <p className='text-white m-0'>Sign in</p>
                </div>
            )}

        </div >
    )
}

export default Header