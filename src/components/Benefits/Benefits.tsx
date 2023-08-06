import { BenefitType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
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
            id='benefits'
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

            </motion.div>
        </section>
    )
}

export default Benefits;
