import Link from 'next/link';
import React, { Component } from 'react';
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import Image from 'next/image';
import Customer1 from '../../public/images/customer1.png';
import H2before from './h2before';
import Slider from "react-slick";
import { motion, Variants } from "framer-motion";
import { fadeUp } from '@/animation';



export const Reviews = [
    {
        id:1,
        nextid: 2,
        title: "Fantastic",
        Logo: Customer1,
        name:"John",
        position: "Student",
        review: "It works great! I was able to input the text and let Comprehelp help me generate questions. I can then send them to my students to check their familiarity with the textbook, which makes my Select articles • Select from different themes, difficulty and length of news • Input the text • Select the level of simplification of the article Generate • Click the button and wait for generated questions Form quiz • Select the questions you want • Save as PDF or save to the dashboard work much more efficient",
    },
    {
        id:2,
        nextid: 3,
        title: "Fantastic1",
        Logo: Customer1,
        name:"John",
        position: "Customer",
        review: "It works great! I was able to input the text and let Comprehelp help me generate questions. I can then send them to my students to check their familiarity with the textbook, which makes my Select articles • Select from different themes, difficulty and length of news • Input the text • Select the level of simplification of the article Generate • Click the button and wait for generated questions Form quiz • Select the questions you want • Save as PDF or save to the dashboard work much more efficient",
    },
    {
        id:3,
        nextid: 4,
        title: "Fantastic2",
        Logo: Customer1,
        name:"John",
        position: "Customer",
        review: "It works great! I was able to input the text and let Comprehelp help me generate questions. I can then send them to my students to check their familiarity with the textbook, which makes my Select articles • Select from different themes, difficulty and length of news • Input the text • Select the level of simplification of the article Generate • Click the button and wait for generated questions Form quiz • Select the questions you want • Save as PDF or save to the dashboard work much more efficient",
    },
    {
        id:4,
        nextid: 1,
        title: "Fantastic3",
        Logo: Customer1,
        name:"John",
        position: "Customer",
        review: "It works great! I was able to input the text and let Comprehelp help me generate questions. I can then send them to my students to check their familiarity with the textbook, which makes my Select articles • Select from different themes, difficulty and length of news • Input the text • Select the level of simplification of the article Generate • Click the button and wait for generated questions Form quiz • Select the questions you want • Save as PDF or save to the dashboard work much more efficient",
    },
]

export default class Feedback extends Component {
    // state = {
    //     activeSlide: 1,
    //     activeSlide2: 4
    // };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            beforeChange: (_current: any, next: any) => this.setState({ activeSlide: next }),
            afterChange: (current: any) => this.setState({ activeSlide2: current +1})
        };
        return (
            <motion.section
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
                className='pb-20 '>
                <div className='pb-40 pt-20 bg-dark-blue z-10 relative'>
                    <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                        <motion.div
                            variants={fadeUp}>
                            <h2 className='md:text-5xl md:leading-[57px] text-3xl font-extrabold text-white Urbanist mb-14 max-w-[569px]'>
                                What
                                <span className='text-primary before:content-[""] before:bg-[url(/images/client-vector.png)] before:bg-auto before:bg-no-repeat before:bg-center before:w-full before:h-2 before:absolute before:bottom-0 relative mx-1'>
                                    Our Client</span>says about us
                            </h2>
                            <Link href="#" className='text-lg leading-[21px] font-bold Urbanist text-white flex'>
                                See more Testimonials <BsArrowUpRight className='ml-3 border-b ' />
                            </Link>
                        </motion.div>
                        <div className='relative'>
                            <Slider {...settings}>
                                {Reviews.map((item: any, index: number) => (
                                    <div key={index}>
                                        <div className='grid grid-cols-2 mb-5'>
                                            <ul className='inline-flex items-center'>
                                                <li className='text-[32px] leading-[38px] font-medium Urbanist text-white'>0{item.id}</li>
                                                <li className='text-xl leading-6 font-medium Urbanist text-white/60'> /0{item.nextid}</li>
                                            </ul>
                                            <ul className='inline-flex items-center justify-end gap-1 text-[#FAB005]'>
                                                <li>
                                                    <AiFillStar size={16} />
                                                </li>
                                                <li>
                                                    <AiFillStar size={16} />
                                                </li>
                                                <li>
                                                    <AiFillStar size={16} />
                                                </li>
                                                <li>
                                                    <AiFillStar size={16} />
                                                </li>
                                                <li>
                                                    <AiFillStar size={16} />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='mb-14'>
                                            <h3 className='text-2xl leading-[25px] font-semibold Urbanist text-white mb-3'>
                                                {item.title}
                                            </h3>
                                            <p className='text-lg leading-[25px] font-medium Urbanist text-white/60'>
                                               {item.review}
                                            </p>
                                        </div>
                                        <div className='grid grid-cols-2 justify-between'>
                                            <div className='flex gap-3'>
                                                <Image src={Customer1} alt="" />
                                                <ul className='inline items-center'>
                                                    <li className='text-xl leading-6 font-medium Urbanist text-white'>{item.name}</li>
                                                    <li className='text-base leading-[19px] font-medium Urbanist text-white/60'>{item.position}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}



                                {/* <div>
                                    <div className='grid grid-cols-2 mb-5'>
                                        <ul className='inline-flex items-center'>
                                            <li className='text-[32px] leading-[38px] font-medium Urbanist text-white'>0{this.state.activeSlide}</li>
                                            <li className='text-xl leading-6 font-medium Urbanist text-white/60'> /0{this.state.activeSlide2}</li>
                                        </ul>
                                        <ul className='inline-flex items-center justify-end gap-1 text-[#FAB005]'>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mb-14'>
                                        <h3 className='text-2xl leading-[25px] font-semibold Urbanist text-white mb-3'>
                                            Fantastic12346
                                        </h3>
                                        <p className='text-lg leading-[25px] font-medium Urbanist text-white/60'>
                                            It works great! I was able to input the text and let Comprehelp help me generate questions. I can then send them to my students to check their familiarity with the textbook, which makes my Select articles • Select from different themes, difficulty and length of news • Input the text • Select the level of simplification of the article Generate • Click the button and wait for generated questions Form quiz • Select the questions you want • Save as PDF or save to the dashboard work much more efficient
                                        </p>
                                    </div>
                                    <div className='grid grid-cols-2 justify-between'>
                                        <div className='flex gap-3'>
                                            <Image src={Customer1} alt="" />
                                            <ul className='inline items-center'>
                                                <li className='text-xl leading-6 font-medium Urbanist text-white'>John</li>
                                                <li className='text-base leading-[19px] font-medium Urbanist text-white/60'>Student</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='grid grid-cols-2 mb-5'>
                                        <ul className='inline-flex items-center'>
                                            <li className='text-[32px] leading-[38px] font-medium Urbanist text-white'>0{this.state.activeSlide}</li>
                                            <li className='text-xl leading-6 font-medium Urbanist text-white/60'> /0{this.state.activeSlide2}</li>
                                        </ul>
                                        <ul className='inline-flex items-center justify-end gap-1 text-[#FAB005]'>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mb-14'>
                                        <h3 className='text-2xl leading-[25px] font-semibold Urbanist text-white mb-3'>
                                            Fantastic12346
                                        </h3>
                                        <p className='text-lg leading-[25px] font-medium Urbanist text-white/60'>
                                            It works great! I was able to input the text and let Comprehelp help me generate questions. I can then send them to my students to check their familiarity with the textbook, which makes my Select articles • Select from different themes, difficulty and length of news • Input the text • Select the level of simplification of the article Generate • Click the button and wait for generated questions Form quiz • Select the questions you want • Save as PDF or save to the dashboard work much more efficient
                                        </p>
                                    </div>
                                    <div className='grid grid-cols-2 justify-between'>
                                        <div className='flex gap-3'>
                                            <Image src={Customer1} alt="" />
                                            <ul className='inline items-center'>
                                                <li className='text-xl leading-6 font-medium Urbanist text-white'>John</li>
                                                <li className='text-base leading-[19px] font-medium Urbanist text-white/60'>Student</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='grid grid-cols-2 mb-5'>
                                        <ul className='inline-flex items-center'>
                                            <li className='text-[32px] leading-[38px] font-medium Urbanist text-white'>0{this.state.activeSlide}</li>
                                            <li className='text-xl leading-6 font-medium Urbanist text-white/60'> /0{this.state.activeSlide2}</li>
                                        </ul>
                                        <ul className='inline-flex items-center justify-end gap-1 text-[#FAB005]'>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                            <li>
                                                <AiFillStar size={16} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mb-14'>
                                        <h3 className='text-2xl leading-[25px] font-semibold Urbanist text-white mb-3'>
                                            Fantastic12346
                                        </h3>
                                        <p className='text-lg leading-[25px] font-medium Urbanist text-white/60'>
                                            It works great! I was able to input the text and let Comprehelp help me generate questions. I can then send them to my students to check their familiarity with the textbook, which makes my Select articles • Select from different themes, difficulty and length of news • Input the text • Select the level of simplification of the article Generate • Click the button and wait for generated questions Form quiz • Select the questions you want • Save as PDF or save to the dashboard work much more efficient
                                        </p>
                                    </div>
                                    <div className='grid grid-cols-2 justify-between'>
                                        <div className='flex gap-3'>
                                            <Image src={Customer1} alt="" />
                                            <ul className='inline items-center'>
                                                <li className='text-xl leading-6 font-medium Urbanist text-white'>John</li>
                                                <li className='text-base leading-[19px] font-medium Urbanist text-white/60'>Student</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='bg-[url(/images/right-circle.png)] bg-no-repeat bg-left-bottom bg-contain'>
                    <div className='z-10 relative -mt-28 mb-10 container mx-auto  bg-primary md:p-[60px] p-10 rounded-3xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                        <motion.div
                            variants={fadeUp}>
                            <h2 className='md:text-5xl md:leading-[57px] text-3xl font-extrabold text-white max-w-fit Urbanist relative'>
                                <H2before Fill_color="#ffffff" Custom_class="absolute top-[-30px] left-[-25px] w-[32px] transform rotate-180" />
                                Subscribe Us
                            </h2>
                            <p className='text-lg leading-6 font-medium Urbanist text-white max-w-[364px]'>
                                Sign in to subscribe now to get the latest discounts and product news!
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            className='subscribtion-form'>
                            <form action="#">
                                <div className="flex md:flex-row flex-col items-center gap-5 md:justify-end">
                                    <div className='bg-white/20 py-4 px-6 rounded-[67px] md:w-[391px] w-auto flex gap-3 items-center text-white border border-white/60'>
                                        <BiEnvelope size={20} />
                                        <input type="email" placeholder="Enter your mail"
                                            className="focus:outline-none text-white placeholder:text-white text-base leading-[19px] font-medium Urbanist" />

                                    </div>
                                    <button type="submit"
                                        className="bg-white text-primary hover:bg-dark-blue/60 hover:text-white text-lg leading-[21px] font-semibold rounded-[67px] py-4 px-6 w-[160px]">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        );
    }
}

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <BsChevronRight
            style={{ ...style, display: "block" }}
            onClick={onClick} size={16} className="w-11 h-11 p-3 border border-white/60  text-white/60 rounded-[31px] cursor-pointer absolute bottom-[8px] right-0 z-10" />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <BsChevronLeft
            style={{ ...style, display: "block" }}
            onClick={onClick} size={16} className="w-11 h-11 p-3 border border-white  text-white rounded-[31px] cursor-pointer absolute bottom-[8px] right-[48px] z-10" />

    );
}