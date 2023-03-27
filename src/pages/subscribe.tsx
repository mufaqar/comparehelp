import Image from 'next/image';
import React from 'react';
import H2before from '../components/h2before';
import { motion, Variants } from "framer-motion";
import { fadeUp } from '@/animation';
import Pricing from '@/components/pricing';

function Subscribe() {
    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            className='py-20 bg-[url("/images/vector.png")] bg-right-top bg-contain bg-no-repeat '>
            <div className='container mx-auto px-4 '>
                <motion.div
                    variants={fadeUp}
                    className='max-w-[509px] mx-auto mb-24'>
                    <h2 className='md:text-5xl md:leading-[57px] text-3xl font-extrabold text-shade/90 max-w-fit mx-auto Urbanist text-center relative'>
                        <H2before Fill_color="#7933D1" Custom_class="absolute top-[-30px] left-[-25px] w-[32px] transform rotate-180" />
                        Subscription
                    </h2>
                    <p className='text-lg leading-6 font-medium Urbanist text-shade/80 text-center'>
                        Buy the official version to break the limit of only three articlesper day and generate more reading questions right now!
                    </p>
                </motion.div>
                <div className='relative'>
                    <svg className='absolute sm:top-[-20px] sm:left-[-30px] top-[-15px] left-[-20px] sm:w-auto w-[25px]' width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <g clipPath="url(#clip0_6_314)">
                            <path d="M34.8674 14.1346L30.5292 7.38486L28.4278 4.1202C27.6874 2.97074 26.8584 1.84228 26.217 0.63509C25.9824 0.199451 26.4204 0.0157485 26.7958 2.54845e-06C27.2859 -0.0209921 27.9064 0.183705 28.2088 0.587852C29.0379 1.69007 29.7314 2.91301 30.477 4.07296L32.5783 7.33762L36.9218 14.0874C37.2033 14.523 36.6767 14.7225 36.3221 14.7382C35.8477 14.7592 35.1437 14.5598 34.8674 14.1294V14.1346Z" fill="#7933D1" />
                            <path d="M26.5507 21.5143C18.0047 18.6957 9.42729 15.9559 0.912493 13.0377C0.615284 12.9379 -0.104279 12.6808 0.0104332 12.2346C0.125147 11.8095 0.907278 11.904 1.18884 11.9932C9.76621 14.712 18.2914 17.604 26.8375 20.4278C27.1504 20.5328 27.9012 20.8004 27.7761 21.2676C27.6614 21.7085 26.8375 21.6192 26.5455 21.5195L26.5507 21.5143Z" fill="#7933D1" />
                            <path d="M28.2923 31.3555L21.6337 35.6331L18.3592 37.7378C17.233 38.4621 16.1223 39.2547 14.9491 39.895C14.5476 40.1102 13.9272 39.9475 13.5569 39.7533C13.364 39.6536 12.754 39.2232 13.1085 38.9555C14.1826 38.142 15.3663 37.4596 16.4978 36.7353L19.7723 34.6306L26.5403 30.2795C27.1452 29.8911 29.1839 30.7834 28.2975 31.3555H28.2923Z" fill="#7933D1" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_314">
                                <rect width="37" height="40" fill="white" transform="matrix(-1 0 0 1 37 0)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className=''>
                        <Pricing />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Subscribe

