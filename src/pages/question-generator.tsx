import React from 'react';
import { BsChevronCompactUp } from 'react-icons/bs';

function Question_Generator() {
    return (
        <section className='py-20'>
            <div className='container mx-auto px-4 '>
                <div className='md:w-3/5 w-full'>
                    <div>
                        <div className='flex justify-between p-2'>
                            <h5 className='text-xl font-bold'>
                                Choose Articles from News
                            </h5>
                            <BsChevronCompactUp size={28} />
                        </div>
                        <div className='bg-shade/5 p-6 rounded-lg '>
                            <ul className='flex space-x-5 text-[26px] leading-[22px] font-normal'>
                                <li>BBC</li>
                                <li>SCMP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question_Generator