
import Image from 'next/image';
import YoonjeLogo from '~/public/YoonjeLogo.svg'

export default function Logo() {
    return (
        <Image
            // className={logoVariant({ form: extended ? 'withText' : 'default' })}
            // className='w-7 h-7'
            width={10}
            height={10}
            src={YoonjeLogo}
            alt="Yoonje Lee's Website"
        />
    );
}