import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import { SelectedPage } from "@/shared/types";
import ActionButton from "../ActionButton/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';

import Sponsors from './Sponsors.tsx'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {


    const isScreenWiderThan = useMediaQuery('(min-width: 1060px)');

    return (
        <section
            id={SelectedPage.Home}
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 "
        >
            {/* Image and main header */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 ">
                {/* Main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* Headings */}
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img src={HomePageText} alt='Home page text.' />
                            </div>
                        </div>
                        <p className='mt-8 text-m md:text-start'>Embark on a transformative fitness journey – where 'no pain, no gain' becomes reality.</p>
                    </div>
                    {/* Actions */}
                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn more</p>
                        </AnchorLink>
                    </div>
                </div>
                {/* Image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt='Home page graphic.' />
                </div>
            </div>

            {isScreenWiderThan && <Sponsors />}

        </section>
    )
}

export default Home;
