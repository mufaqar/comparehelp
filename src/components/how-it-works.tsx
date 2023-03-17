import React from 'react';
import H2before from './h2before';
import TabsRender from './tabs';

function HowItWorks() {
    return (
        <section className='py-20 bg-[url(/images/main-bg.png)] bg-no-repeat bg-center bg-cover relative'>
            <div className='container mx-auto px-4 relative z-10'>
                <div className='max-w-[509px] mx-auto mb-12'>
                <h2 className='md:text-5xl md:leading-[57px] text-3xl font-extrabold text-shade/90 max-w-fit mx-auto Urbanist text-center relative'>
                        <H2before Fill_color="#7933D1" Custom_class="absolute top-[-30px] left-[-25px] w-[32px] transform rotate-180" />
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