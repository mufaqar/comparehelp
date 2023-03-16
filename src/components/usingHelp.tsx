import Image from 'next/image';
import React from 'react';
import Speed from '../../public/images/speed.png';
import Time from '../../public/images/time.png';
import Cost from '../../public/images/cost.png';

function UsingHelp() {
    return (
        <section className=''>
            <div className='py-20 bg-primary'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-[535px] mx-auto mb-14'>
                        <h2 className='text-5xl leading-[57px] font-extrabold Urbanist text-white text-center'>
                            After Using CompreHelp
                        </h2>
                        <p className='text-lg leading-6 font-medium Urbanist text-white text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ex eget augue interdum pellentesque. Phasellus nisi nisi,
                        </p>
                    </div>
                    <div className='relative'>
                        <svg className='absolute sm:top-[-20px] sm:left-[-30px] top-[-15px] left-[-20px] sm:w-auto w-[25px]' width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <g clipPath="url(#clip0_6_314)">
                                <path d="M34.8674 14.1346L30.5292 7.38486L28.4278 4.1202C27.6874 2.97074 26.8584 1.84228 26.217 0.63509C25.9824 0.199451 26.4204 0.0157485 26.7958 2.54845e-06C27.2859 -0.0209921 27.9064 0.183705 28.2088 0.587852C29.0379 1.69007 29.7314 2.91301 30.477 4.07296L32.5783 7.33762L36.9218 14.0874C37.2033 14.523 36.6767 14.7225 36.3221 14.7382C35.8477 14.7592 35.1437 14.5598 34.8674 14.1294V14.1346Z" fill="#ffffff8c" />
                                <path d="M26.5507 21.5143C18.0047 18.6957 9.42729 15.9559 0.912493 13.0377C0.615284 12.9379 -0.104279 12.6808 0.0104332 12.2346C0.125147 11.8095 0.907278 11.904 1.18884 11.9932C9.76621 14.712 18.2914 17.604 26.8375 20.4278C27.1504 20.5328 27.9012 20.8004 27.7761 21.2676C27.6614 21.7085 26.8375 21.6192 26.5455 21.5195L26.5507 21.5143Z" fill="#ffffff8c" />
                                <path d="M28.2923 31.3555L21.6337 35.6331L18.3592 37.7378C17.233 38.4621 16.1223 39.2547 14.9491 39.895C14.5476 40.1102 13.9272 39.9475 13.5569 39.7533C13.364 39.6536 12.754 39.2232 13.1085 38.9555C14.1826 38.142 15.3663 37.4596 16.4978 36.7353L19.7723 34.6306L26.5403 30.2795C27.1452 29.8911 29.1839 30.7834 28.2975 31.3555H28.2923Z" fill="#ffffff8c" />
                            </g>
                            <defs>
                                <clipPath id="clip0_6_314">
                                    <rect width="37" height="40" fill="white" transform="matrix(-1 0 0 1 37 0)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-12'>
                            <div className='w-full h-full bg-gradient-to-b from-white/40 gap-12 p-12 grid rounded-[24px] border border-white/20'>
                                <Image src={Speed} alt="" className='mx-auto' />
                                <div>
                                    <h3 className='text-[32px] leading-[38px] font-bold Urbanist text-white text-center mb-3'>
                                        Speed
                                    </h3>
                                    <p className='text-xl font-medium Urbanist text-white text-center'>
                                        It takes x seconds to generate a quiz/question
                                    </p>
                                </div>
                            </div>
                            <div className='w-full h-full bg-gradient-to-b from-white/40 gap-12 p-12 grid rounded-[24px] border border-white/20'>
                                <Image src={Time} alt="" className='mx-auto' />
                                <div>
                                    <h3 className='text-[32px] leading-[38px] font-bold Urbanist text-white text-center mb-3'>
                                        Time
                                    </h3>
                                    <p className='text-xl font-medium Urbanist text-white text-center'>
                                        It can save y% time.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full h-full bg-gradient-to-b from-white/40 gap-12 p-12 grid rounded-[24px] border border-white/20'>
                                <Image src={Cost} alt="" className='mx-auto' />
                                <div>
                                    <h3 className='text-[32px] leading-[38px] font-bold Urbanist text-white text-center mb-3'>
                                        Cost
                                    </h3>
                                    <p className='text-xl font-medium Urbanist text-white text-center'>
                                        Saved z% of the total cost
                                    </p>
                                </div>
                            </div>
                        </div>
                        <svg className='absolute sm:bottom-[-35px] sm:right-[-35px] bottom-[-30px] right-[-15px] sm:w-auto w-[25px]' width="46" height="56" viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_10_146)">
                                <path d="M17.4463 4.59146C26.6875 11.5939 35.6231 18.982 44.3246 26.6568C44.9963 27.2464 45.3816 26.1718 45.4187 25.6722C45.4814 24.783 45.105 23.8276 44.4533 23.2382C35.8335 15.4446 26.8275 8.08551 17.5766 1.06296C16.8544 0.512613 16.4902 1.50752 16.4521 2.07704C16.3999 2.92638 16.7438 4.0614 17.4463 4.59146Z" fill="#ffffff8c" />
                                <path d="M11.3506 14.7656C14.0111 18.9639 16.6715 23.1623 19.3421 27.3507C19.6551 27.8453 20.3565 28.4553 20.7574 27.691C21.1583 26.9266 20.8649 25.7623 20.4543 25.0964C17.8042 20.8782 15.1539 16.67 12.4937 12.4516C12.1709 11.947 11.4498 11.3166 11.0386 12.1009C10.6274 12.8851 10.9204 14.0794 11.3508 14.7556L11.3506 14.7656Z" fill="#ffffff8c" />
                                <path d="M1.41363 24.315C4.4365 33.959 7.43923 43.6128 10.4921 53.2573C10.6545 53.7896 11.0964 55.0661 11.8793 54.8672C12.6221 54.6778 12.4919 53.2858 12.3389 52.7935C9.34616 43.1399 6.32329 33.4959 3.30057 23.8418C3.12828 23.2993 2.68685 21.9929 1.8838 22.2014C1.13103 22.3907 1.26078 23.8127 1.42349 24.3251L1.41363 24.315Z" fill="#ffffff8c" />
                            </g>
                            <defs>
                                <clipPath id="clip0_10_146">
                                    <rect width="54.05" height="44.15" fill="white" transform="translate(45.7659 1.3147) rotate(90.8166)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='bg-[url(/svg/half-circle.svg)] bg-no-repeat bg-right-bottom bg-auto pb-40'></div>
        </section>
    )
}

export default UsingHelp