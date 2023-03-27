import Image from 'next/image';
import React from 'react';
import Img_url from '../../public/svg/frame.svg';
import Girl from '../../public/images/girl.png';
import { motion, Variants } from "framer-motion";
import { fadeUp } from '@/animation';

function Signup() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
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
                        Single click, Multiple questions
                    </p>
                    <div className="mt-10">
                        <form className="flex md:flex-row flex-col gap-3 w-full items-center">
                            <div className="md:max-w-[313px] w-full">
                                <input className="shadow appearance-none border rounded-[67px] w-full py-4 px-6 text-base placeholder:text-primary font-semibold text-primary leading-tight focus:outline-none focus:shadow-outline bg-shade/5"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email" />
                            </div>
                            <button
                                type='submit'
                                className="px-6 py-4 bg-transparent rounded-[67px] text-primary hover:text-white Urbanist text-base leading-[19.2px] font-semibold hover:bg-primary/70 border-2 border-primary hover:border-primary/70 outline-none md:w-[120px] w-full"
                            >
                                Trial Now
                            </button>
                        </form>
                        <p className='text-sm leading-4 font-medium Urbanist text-shade/80 mt-2'>
                            Get started for free with no credit card needed!
                        </p>
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

export default Signup