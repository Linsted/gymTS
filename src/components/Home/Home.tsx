import AnchorLink from "react-anchor-link-smooth-scroll";
import Sponsors from './Sponsors.tsx';

import HomePageGraphic from '@/assets/HomePageGraphic.png';
import HomePageText from '@/assets/HomePageText.png';
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ActionButton from "../ActionButton/ActionButton";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

    const isScreenWiderThan = useMediaQuery('(min-width: 1060px)');

    return (
        <section
            id={SelectedPage.Home}
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 "
        >
            {/* Image and main header */}
            <motion.div
                className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 "
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* Main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* Headings */}
                    <motion.div
                        className="md:-mt-20"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: -70 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img src={HomePageText} alt='Home page text.' />
                            </div>
                        </div>
                        <h1 className='mt-8 text-lg md:text-start'>Embark on a fitness journey – where 'no pain, no gain' becomes reality.</h1>
                    </motion.div>
                    {/* Actions */}
                    <motion.div
                        className="mt-4 flex items-center gap-8"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: -70 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn more</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* Image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt='Home page graphic.' />
                </div>
            </motion.div>
            {isScreenWiderThan && <Sponsors />}
        </section>
    )
}

export default Home;
