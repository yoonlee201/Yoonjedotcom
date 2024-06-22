import Image from 'next/image';
import YoonjeLogo from '~/public/YoonjeLogo.svg';

export default function Logo() {
    return (
        <Image
            className="min-h-[3.6rem] min-w-[5.7rem]"
            src={YoonjeLogo}
            alt="Yoonje Lee's Website"
        />
    );
}
