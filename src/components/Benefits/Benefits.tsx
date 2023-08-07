import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ActionButton from '../ActionButton/ActionButton';
import TitleText from '../TitleText/TitleText';
import Benefit from './Benefit';
import BENEFITS from './constants';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <section
            id={SelectedPage.Benefits}
            className='mx-auto min-h-full w-5/6 py-20'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Header */}
                <motion.div
                    className='md:my-5 md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <TitleText>MORE THAN JUST GYM.</TitleText>
                    <p className='my-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur dolor magni ex itaque unde illo sunt quisquam quam,
                        molestias fuga quas cum dicta incidunt optio eveniet illum modi odit quasi.</p>
                </motion.div>
                {/* Benefits */}
                <motion.ul
                    className='md:flex mt-5 items-center justify-between gap-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {BENEFITS.map(({ title, icon, description }: BenefitType) =>
                        <Benefit
                            key={title}
                            icon={icon}
                            title={title}
                            description={description}
                            setSelectedPage={setSelectedPage}
                        />)}
                </motion.ul>
                {/* Graphics and description */}
                <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                    {/* Grahic */}
                    <img
                        className='mx-auto'
                        src={BenefitsPageGraphic}
                        alt="Benefits section image"
                    />
                    {/* Description */}
                    <div>
                        {/* Title */}
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <TitleText>Millions of happy members getting <span className='text-primary-500'>Fit</span></TitleText>
                                </motion.div>
                            </div>
                        </div>
                        {/* Descript */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque perspiciatis omnis sed voluptas error voluptatem, ipsa iste odio, vitae quidem temporibus nostrum molestias libero dolor in! Animi, nihil culpa.
                                Aliquid minus ratione natus cupiditate tempora magnam assumenda! Dignissimos, quidem tempore. Maxime odit dolores minima ipsum pariatur non quisquam eius delectus fuga excepturi suscipit exercitationem officia, cum obcaecati sed saepe!</p>
                            <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ipsa nulla sint dolor, reprehenderit modi beatae molestiae, quidem nemo tempora, explicabo fugiat commodi voluptatem in doloribus? Aliquam autem voluptatibus assumenda?</p>
                        </motion.div>
                        {/* Button */}
                        <div className='relative mt-16'>
                            <div className='before:absolute before:-bottom-20 before:-right-2 before:z-[-1] before:content-sparkles'>
                                <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export default Benefits;
