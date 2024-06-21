
import Image from 'next/image';
import YoonjeLogo from '~/public/YoonjeLogo.svg'

export default function Logo() {
    return (
        <Image
            className='w-30
             h-20
            '
            src={YoonjeLogo}
            alt="Yoonje Lee's Website"
        />
    );
}