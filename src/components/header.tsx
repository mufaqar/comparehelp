import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './logo';


export default function Header() {

  const [navbar, setNavbar] = useState(false);

  return (
    <header className='py-3'>
      <nav className="w-full">
        <div className="justify-between px-4 container mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="#">
              <Logo Fill_color="#7933D1"/>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-shade/60 rounded-md outline-none focus:border-shade/60 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-shade/60"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-shade/60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
                <li className="Urbanist text-base leading-[19.2px] text-shade/60 hover:text-primary active:text-primary font-bold">
                  <Link href="#">
                    Home
                  </Link>
                </li>
                <li className="Urbanist text-base leading-[19.2px] text-shade/60 hover:text-primary active:text-primary font-bold">
                  <Link href="#">
                    Product & Service
                  </Link>
                </li>
                <li className="Urbanist text-base leading-[19.2px] text-shade/60 hover:text-primary active:text-primary font-bold">
                  <Link href="#">
                    Price & Help
                  </Link>
                </li>
                <li className="Urbanist text-base leading-[19.2px] text-shade/60 hover:text-primary active:text-primary font-bold">
                  <Link href="#">
                    Personal Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between md:mt-0 mt-5">
            <button
              className="px-6 py-4 bg-transparent rounded-[67px] text-primary hover:text-white Urbanist text-base leading-[19.2px] font-semibold hover:bg-primary/70 outline-none w-[120px]"
              onClick={() => setNavbar(!navbar)}
            >
              Log in
            </button>
            <button
              className="px-6 py-4 bg-primary rounded-[67px] text-white Urbanist text-base leading-[19.2px] font-semibold hover:bg-primary/70 outline-none w-[120px]"
              onClick={() => setNavbar(!navbar)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}