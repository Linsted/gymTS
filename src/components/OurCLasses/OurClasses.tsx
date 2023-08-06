import { ClassesType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import TitleText from '../TitleText/TitleText';
import Class from './Class';
import CLASSES from './constants';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {

    return (
        <section
            id={SelectedPage.OurClasses}
            className='w-full bg-primary-100 py-40'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
                className='mx-auto w-5/6'
            >
                <motion.div
                    className=''
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -70 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className='md:w-3/5'>
                        <TitleText>Our Classes</TitleText>
                        <p className='py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero itaque impedit
                            atque non dolor esse voluptatibus reiciendis quam cumque nulla! Perspiciatis
                            laborum laudantium asperiores cupiditate consequatur aliquam deserunt, non ipsam!</p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[352px] w-full overflow-x-auto overflow-y-hidden'>

                    <ul className='width-[2800px] whitespace-nowrap'>
                        {CLASSES.map(({ name, description, image }: ClassesType) => <Class
                            key={name}
                            name={name}
                            description={description}
                            image={image}
                        />)}
                    </ul>

                </div>
            </motion.div>
        </section>
    )
};

export default OurClasses;
