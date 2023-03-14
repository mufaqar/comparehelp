import Image from 'next/image';
import React from 'react';
import Img_url from '../../public/svg/fram1.svg';
import Logo1 from '../../public/images/partnr1.png';
import Logo2 from '../../public/images/partnr2.png';
import Logo3 from '../../public/images/partnr3.png';
import Logo4 from '../../public/images/partnr4.png';
import Logo5 from '../../public/images/partnr5.png';
import Logo6 from '../../public/images/partnr6.png';

function Partners() {
    return (
        <section className='py-20 bg-[url(/svg/circle1.svg)] bg-no-repeat bg-right bg-auto'>
            <div className='container mx-auto px-4'>
                <div className='max-w-[509px] mx-auto mb-14'>
                    <h2 className='text-5xl leading-[57px] font-extrabold text-shade/90 max-w-fit mx-auto text-center relative'>
                        <Image src={Img_url} alt="" className='w-8 h-10 transform rotate-180 absolute top-[-20px] sm:left-[-25px] left-[10px]' />
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