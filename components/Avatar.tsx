import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image';

type Props = {
    seed?: string
    large?: boolean
}

function Avatar({ seed, large }: Props) {
    const { data: session } = useSession()

    return (
        <div className={`relative h-10 w-10 overflow-hidden rounded-full border-gray-300 bg-white ${large && 'h-20 w-20'}`}>
            <Image
                alt='avatar'
                width={63}
                height={63}
                src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed || session?.user?.name || 'noface'}.svg`}
            />
        </div>
    )
}

export default Avatar