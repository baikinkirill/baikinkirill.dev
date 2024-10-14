import React from 'react';
import avatar from '@/shared/illustrations/avatar/avatar.png';
import Image from 'next/image';
import { RadialBackgroundGradient } from '@/components/RadialBackgroundGradient';

export const Avatar: React.FC = () => {
    return (
        <div>
            <RadialBackgroundGradient>
                <Image src={avatar} alt="Avatar" width={240} height={240}/>
            </RadialBackgroundGradient>
        </div>
    );
};
