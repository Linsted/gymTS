import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import Logo from '@/assets/Logo.png';
import ActionButton from '@/components/ActionButton/ActionButton';
import Links from '@/components/Links/Links';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isAtPageTop: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isAtPageTop }: Props) => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const flexBetween = 'flex items-center justify-between';
    const isScreenWiderThan = useMediaQuery('(min-width: 1060px)');
    const navbarBackground = !isAtPageTop && 'bg-primary-100 drop-shadow';

    return (
        <header>
            <nav>
                <div className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                    <div className={`${flexBetween} mx-auto w-5/6`}>
                        <div className={`${flexBetween} w-full gap-16`}>
                            <img alt='logo' src={Logo} />
                            {isScreenWiderThan
                                ? (<div className={`${flexBetween} w-full`}>
                                    <Links
                                        classNames={`${flexBetween} gap-8 text-sm`}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <div className={`${flexBetween} gap-8`}>
                                        <p>Sign In</p>
                                        <ActionButton setSelectedPage={setSelectedPage}> Become a Member</ActionButton>
                                    </div>
                                </div>)
                                : (
                                    <button
                                        className='rounded-full bg-secondary-500 p-2'
                                        onClick={() => setToggleMenu(!toggleMenu)}
                                    >
                                        <Bars3Icon className='h-6 w-6 text-white' />
                                    </button>
                                )}
                        </div>
                    </div>
                </div>
                {!isScreenWiderThan && toggleMenu && (
                    <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                        <MobileMenu
                            toggleMenu={toggleMenu}
                            setToggleMenu={setToggleMenu}
                        />
                        <Links
                            classNames='ml-[33%] flex flex-col gap-10 text-2xl'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div >
                )}
            </nav>
        </header>
    )
};

export default Navbar;