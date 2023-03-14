import Image from 'next/image';
import React from 'react';
import Img_url from '../../public/svg/frame.svg';
import Girl from '../../public/images/girl.png';

function Banner() {
    return (
        <section>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 items-center bg-[url("/images/vector.png")] bg-right-top bg-contain bg-no-repeat py-20'>
                <div>
                    <p className='text-2xl leading-7 font-extrabold text-primary Urbanist flex items-center'>
                        <Image src={Img_url} alt="" className='w-10 h-w-10' /> Comprehelp
                    </p>
                    <h2 className='text-7xl leading-[90px] font-extrabold text-shade/90'>
                        Generate several questions in a <br />
                        <span className='text-primary'>
                            single click.
                        </span>
                    </h2>
                    <p className='text-lg leading-6 font-medium Urbanist text-shade/80'>
                        Comprehelp comes with news resources of different fields and difficulties and can refine the content of the articles, and then generate multiple titles based on the content of the articles.
                    </p>
                </div>
                <div>
                    <Image src={Girl} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner