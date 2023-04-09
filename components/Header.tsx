import React from 'react'
import Image from 'next/image';
import { BeakerIcon, ChevronDownIcon, HomeIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, BellIcon, ChatBubbleLeftIcon, GlobeAltIcon, MegaphoneIcon, PlusIcon, SparklesIcon, UserCircleIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';



function Header() {
    const { data: session } = useSession();

    return (
        <div className='flex sticky top-0 z-50 bg-black border-b-2 border-opacity-10 border-white px-4 py-2'>
            <div className='w-20 cursor-pointer flex-shrink-0'>
                <Link href="/">
                    <Image
                        priority
                        width={63}
                        height={63}
                        alt='icon'
                        src="https://i.pinimg.com/474x/f1/96/60/f196607455500932e070e475eaed8dff.jpg"
                    />
                </Link>
            </div>
            <div className='flex items-center mx-7 lg:min-w-[200px]'>
                <HomeIcon className='icon' />
                <p className='ml-2 flex-1 text-white hidden lg:inline'>Home</p>
                <ChevronDownIcon className='icon' />
            </div>
            <form className='flex flex-1 items-center space-x-2 px-2 rounded-md border border-borderColor bg-lightDark my-1'>
                <MagnifyingGlassCircleIcon className='icon' />
                <input type='text' placeholder='Search Hextech' className='bg-lightDark flex-1 outline-none text-gray-500' />
            </form>
            <div className='items-center hidden lg:inline-flex'>
                <SparklesIcon className='icon' />
                <GlobeAltIcon className='icon' />
                <VideoCameraIcon className='icon' />
                <hr className='h-10 border border-borderColor' />
                <ChatBubbleLeftIcon className='icon' />
                <BellIcon className='icon' />
                <PlusIcon className='icon' />
                <MegaphoneIcon className='icon' />
            </div>
            <div className='flex items-center lg:hidden'>
                <Bars3Icon className='icon' />
            </div>

            {session ? (
                <div
                    onClick={() => signOut()}
                    className='hidden cursor-pointer items-center space-x-2 shrink-0 border border-borderColor hover:border-gold hover-element px-3 rounded-lg my-1 lg:flex'>
                    <BeakerIcon className='h-7 w-7 text-gold cursor-pointer' />
                    <div className='flex-1 text-xs'>
                        <p className='text-white truncate'>{session?.user?.name}</p>
                        <p className='text-gray-400'>1 Karma</p>
                    </div>
                    <ChevronDownIcon className='h-5 flex-shrink-0 text-gold' />
                </div>

            ) : (
                <div
                    onClick={() => signIn()}
                    className='hidden cursor-pointer items-center space-x-2 shrink-0 border border-borderColor hover:border-gold hover-element px-3 rounded-lg my-1 lg:flex'>
                    <UserCircleIcon className='h-7 w-7 text-gold cursor-pointer' />
                    <p className='text-gray-400'>Sign in</p>
                </div>
            )}

        </div >
    )
}

export default Header