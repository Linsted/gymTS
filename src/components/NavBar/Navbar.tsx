import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import Logo from '@/assets/Logo.png'
import { SelectedPage } from '@/shared/types';

import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediaScreens = useMediaQuery('(min-width: 1060px)');

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img alt='logo' src={Logo} />

                        {isAboveMediaScreens
                            ? (<div className={`${flexBetween} w-full`}>
                                <ul className={`${flexBetween} gap-8 text-sm`}>
                                    <li>
                                        <Link
                                            page='Home'
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            page='Benefits'
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            page='Our Classes'
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            page='Contact Us'
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    </li>
                                </ul>

                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <button>Become a Member</button>
                                </div>
                            </div>)
                            : (
                                <button
                                    className='rounded-full bg-secondary-500 p-2'
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                >
                                    {toggleMenu ? <XMarkIcon className='h-6 w-6 text-white' /> : <Bars3Icon className='h-6 w-6 text-white' />}
                                </button>
                            )}
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;