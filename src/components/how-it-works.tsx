import React from 'react';
import H2before from './h2before';
import TabsRender from './tabs';
import { motion, Variants } from "framer-motion";
import { fadeUp } from '@/animation';

function HowItWorks() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            className='py-20 bg-[url(/images/main-bg.png)] bg-no-repeat bg-center bg-cover relative'>
            <div className='container mx-auto px-4 relative z-10'>
                <motion.div
                    variants={fadeUp}
                    className='max-w-[509px] mx-auto mb-12'>
                    <h2 className='md:text-5xl md:leading-[57px] text-3xl font-extrabold text-shade/90 max-w-fit mx-auto Urbanist text-center relative'>
                        <H2before Fill_color="#7933D1" Custom_class="absolute top-[-30px] left-[-25px] w-[32px] transform rotate-180" />
                        How It Works
                    </h2>
                    <p className='text-lg leading-6 font-medium Urbanist text-shade/80 text-center'>
                        Comprehelp can dramatically improve the efficiency of teacher preparation. The teacher can choose the difficulty and length of the articles according to the course schedule and students' level. It can improve students' abilities in all aspects while reducing teachers' work pressure.
                    </p>
                </motion.div>
                <TabsRender />
            </div>
        </motion.section>
    )
}

export default HowItWorks