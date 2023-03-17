import Image from 'next/image';
import React from 'react';
import Img_url from '../../public/svg/frame.svg';
import Girl from '../../public/images/girl.png';
import { motion, Variants } from "framer-motion";
import { fadeUp } from '@/animation';

function Banner() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className='py-20'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 items-center bg-[url("/images/vector.png")] bg-right-top bg-contain bg-no-repeat '>
                <motion.div
                    variants={fadeUp}>
                    <p className='text-2xl leading-7 font-extrabold text-primary Urbanist flex items-center'>
                        <Image src={Img_url} alt="" className='w-8 h-10' /> Comprehelp
                    </p>
                    <h2 className='md:text-7xl md:leading-[90px] text-[40px] leading-[50px] font-extrabold text-shade/90'>
                        Generate several questions in a <br />
                        <span className='text-primary'>
                            single click.
                        </span>
                    </h2>
                    <p className='text-lg leading-6 font-medium Urbanist text-shade/80'>
                        Comprehelp comes with news resources of different fields and difficulties and can refine the content of the articles, and then generate multiple titles based on the content of the articles.
                    </p>
                    <div className="flex mt-10">
                        <button
                            className="px-6 py-4 bg-primary rounded-[67px] text-white Urbanist text-base leading-[19.2px] font-semibold hover:bg-primary/70 outline-none w-[120px]"
                        >
                            Go into
                        </button>
                        <button
                            className="px-6 py-4 bg-transparent rounded-[67px] text-primary hover:text-white Urbanist text-base leading-[19.2px] font-semibold hover:bg-primary/70 outline-none w-[120px]"
                        >
                            Buy now
                        </button>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeUp}>
                    <Image src={Girl} alt="" />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Banner