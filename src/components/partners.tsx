import Image from 'next/image';
import React from 'react';
import Logo1 from '../../public/images/partnr1.png';
import Logo2 from '../../public/images/partnr2.png';
import Logo3 from '../../public/images/partnr3.png';
import Logo4 from '../../public/images/partnr4.png';
import Logo5 from '../../public/images/partnr5.png';
import Logo6 from '../../public/images/partnr6.png';
import H2before from './h2before';

function Partners() {
    return (
        <section className='py-20 bg-[url(/svg/circle1.svg)] bg-no-repeat bg-right bg-auto' style={{backgroundSize: "9%"}}>
            <div className='container mx-auto px-4'>
                <div className='max-w-[509px] mx-auto mb-14'>
                <h2 className='md:text-5xl md:leading-[57px] text-3xl font-extrabold text-shade/90 max-w-fit mx-auto Urbanist text-center relative'>
                        <H2before Fill_color="#7933D1" Custom_class="absolute top-[-30px] left-[-25px] w-[32px] transform rotate-180" />
                        Data of our Partners
                    </h2>
                    <p className='text-lg leading-6 font-medium Urbanist text-shade/80 text-center'>
                        We have established long-term cooperation with x schools and over y teachers have tried our products, almost all of whom agree that it improves their work efficiency
                    </p>
                </div>
                <div className='grid md:grid-cols-6 grid-cols-2 gap-8 items-center'>
                {PartnerLogo.map((item:any, index:number) => (
                    <div key={index} className='flex justify-center'>
                        <Image src={item.Logo} alt="" className='object-fill h-full' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partners

export const PartnerLogo = [
    {
        Logo: Logo1,
    },
    {
        Logo: Logo2,
    },
    {
        Logo: Logo3,
    },
    {
        Logo: Logo4,
    },
    {
        Logo: Logo5,
    },
    {
        Logo: Logo6,
    },
]