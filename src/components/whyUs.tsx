import Image from 'next/image';
import React from 'react';
import Img_url from '../../public/svg/fram1.svg';
import Progresbar from '../../public/images/progresbar.png';
import Before_Img from '../../public/svg/frame.svg';
import After_Img from '../../public/svg/fram1.svg';

function WhyUs() {
    return (
        <section className='py-20 bg-[url(/svg/circle2.svg)] bg-no-repeat bg-left-bottom bg-auto'>
            <div className='container mx-auto px-4'>
                <div className='max-w-[509px] mx-auto mb-14'>
                    <h2 className='text-5xl leading-[57px] font-extrabold text-shade/90 max-w-fit mx-auto text-center relative'>
                        <Image src={Img_url} alt="" className='w-8 h-10 transform rotate-180 absolute top-[-20px] left-[-25px]' />
                        Why us
                    </h2>
                </div>
                <div className='bg-shade/10 rounded-[24px] p-[60px] relative'>
                    <Image src={Before_Img} alt="" className='absolute top-[-20px] left-[-40px]' />
                    <div className='flex flex-col gap-12'>
                        <p className='text-[32px] leading-[38.4px] font-semibold Urbanist text-primary text-center max-w-[612px] mx-auto'>
                            Don’t waste your time in finding a suitable quiz. The upper display shows
                        </p>
                        <Image src={Progresbar} alt="" className='mx-auto' />
                        <p className='text-xl font-medium Urbanist text-shade/60 text-center max-w-[673px] mx-auto'>
                            Whenever x articles are generated, the lower display shows: It saves y hour and increases efficiency by z%.
                        </p>
                        <button
                            className="px-6 py-4 bg-primary rounded-[67px] text-white Urbanist text-base leading-[19.2px] font-semibold hover:bg-primary/70 outline-none w-[160px] mx-auto"
                        >
                            Action Button
                        </button>
                    </div>
                    <Image src={After_Img} alt="" className='absolute bottom-[-35px] right-[-35px]' />
                </div>
            </div>
        </section>
    )
}

export default WhyUs