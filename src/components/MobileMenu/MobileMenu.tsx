import { XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
    toggleMenu: boolean,
    setToggleMenu: (value: boolean) => void,
};

const MobileMenu = ({ toggleMenu, setToggleMenu }: Props) => {

    return (
        <div className='flex justify-end p-12'>
            <button
                className=''
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
        </div>
    )
};

export default MobileMenu;