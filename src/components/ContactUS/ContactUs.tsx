import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import TitleText from "../TitleText/TitleText";
import Form from "./Form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    return (
        <section
            id={SelectedPage.ContactUs}
            className="mx-auto w-5/6 pt-24 pb-32 "
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                {/* Header */}
                <motion.div
                    className="md:w-3/5"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -70 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <TitleText><span className=" text-primary-500">Join now</span> to get in shape</TitleText>
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Corrupti, excepturi quod asperiores temporibus assumenda
                        molestiae deleniti commodi veniam qui quo velit numquam,
                        id exercitationem, earum quis aliquam ipsum nobis quidem!
                    </p>
                </motion.div>
                {/* Form and image */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, y: 70 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <Form />
                    </motion.div>


                </div>
            </motion.div>

        </section>
    )
};

export default ContactUs;
