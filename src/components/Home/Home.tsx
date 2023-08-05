import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "../ActionButton/ActionButton";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedbull from '@/assets/SponsorRedBull.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

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
            <div>
                {/* Main header */}
                <div>
                    {/* Headings */}
                    <div>
                        <div>
                            <div>
                                <img src={HomePageText} alt='Home page text.' />
                            </div>
                        </div>
                        <p>Embark on a transformative fitness journey – where 'no pain, no gain' becomes reality.</p>
                    </div>
                    {/* Actions */}
                    <div>
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
                <div>
                    <img src={HomePageGraphic} alt='Home page graphic.' />
                </div>
            </div>

            {isScreenWiderThan && (
                <div>
                    <div>
                        <ul>
                            <li><img src={SponsorRedbull} alt='Redbull sponsor`s logo' /></li>
                            <li><img src={SponsorFortune} alt='Fortune sponsor`s logo' /></li>
                            <li><img src={SponsorForbes} alt='Forbes sponsor`s logo' /></li>
                        </ul>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Home;
