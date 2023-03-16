import React from 'react';
import Image from 'next/image';
import Img_url from '../../public/svg/fram1.svg';
import TabsRender from './tabs';

function HowItWorks() {
    return (
        <section className='py-20 bg-[url(/images/main-bg.png)] bg-no-repeat bg-center bg-cover relative'>
            <div className='container mx-auto px-4 relative z-10'>
                <div className='max-w-[509px] mx-auto mb-12'>
                    <h2 className='text-5xl leading-[57px] font-extrabold text-shade/90 max-w-fit mx-auto Urbanist text-center relative'>
                        <Image src={Img_url} alt="" className='w-8 h-10 transform rotate-180 absolute top-[-20px] sm:left-[-25px] left-[10px]' />
                        How It Works
                    </h2>
                    <p className='text-lg leading-6 font-medium Urbanist text-shade/80 text-center'>
                        Comprehelp can dramatically improve the efficiency of teacher preparation. The teacher can choose the difficulty and length of the articles according to the course schedule and students' level. It can improve students' abilities in all aspects while reducing teachers' work pressure.
                    </p>
                </div>
                <TabsRender />
            </div>
        </section>
    )
}

export default HowItWorks