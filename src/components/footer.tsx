import Link from 'next/link';
import React from 'react';
import Logo from './logo';

function Footer() {
    return (
        <footer className='bg-dark-blue pt-20 pb-6'>
            <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-10 mb-20'>
                <div>
                    <Logo Fill_color="text-white" />
                    
                </div>
                <div>
                    <h3 className='text-base leading-[19px] font-semibold Urbanist text-white mb-6'>
                        About Comparehelp
                    </h3>
                    <ul className='list-none grid gap-3'>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Product & Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Price
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Personal Center
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-base leading-[19px] font-semibold Urbanist text-white mb-6'>
                        Customer Service
                    </h3>
                    <ul className='list-none grid gap-3'>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Payment Method
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                FAQ’s
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Career
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-base leading-[19px] font-semibold Urbanist text-white mb-6'>
                        Policy & Law
                    </h3>
                    <ul className='list-none grid gap-3'>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-base leading-[19px] font-medium Urbanist text-white/60'>
                                Collection of Personal Data Statement
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container mx-auto px-4 border-white/10 border-t pt-6'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <p className='text-sm leading-4 font-normal Urbanist text-white/60 md:text-left text-center'>
                        ©comparehelp .2023. All Rights Reserved.
                    </p>
                    <p className='text-sm leading-4 font-normal Urbanist text-white/60 md:text-right text-center'>
                        Design by <span className='text-white'>
                            Delemont Studio.
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer