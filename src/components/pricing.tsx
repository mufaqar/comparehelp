import { features } from 'process';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

function Pricing() {

    return (
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-16'>
            {pricingData.map((item: any, index: number) => (
                <div key={index} className={`${item.isHighlighted === true ? 'bg-[#22004B]' : 'bg-white'}  border border-shade/5 shadow rounded-3xl px-6 pb-8 `}>
                    <span className='Urbanist text-base leading-5 font-bold text-center text-white shadow bg-primary py-4 px-6 rounded-[61px] w-fit mx-auto block border-white border-8 mt-[-40px]'>
                        {item.time}
                    </span>
                    <div className='my-10'>
                        <h2 className={`${item.isHighlighted === true ? 'text-white' : 'text-shade'} md:text-[32px] md:leading-[44px] font-semibold Urbanist text-center mb-8 `}>
                            {item.title}
                        </h2>
                        <ul className={`${item.isHighlighted === true ? 'text-white' : 'text-shade/80'} flex flex-col gap-3`}>
                            {item.features?.map((item: any, index: number) => (
                                <li className={` flex text-base leading-[22px] font-medium Urbanist space-x-2 `}>
                                    <BsCheckCircle size={24} className="text-primary" />
                                    <span>
                                        Remove the daily limit on the number of articles generated.
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${item.isHighlighted === true ? 'bg-white/5' : 'bg-shade/5'}   rounded-2xl py-8`}>
                        <h3 className='md:text-[40px] md:leading-[44px] font-bold Urbanist text-center text-primary'>
                            {item.price}
                            <span className={`md:text-xl md:leading-[36px] font-medium Urbanist text-center ${item.isHighlighted === true ? 'text-white' : 'text-shade/80'} `}>
                                /month
                            </span>
                        </h3>
                        <span className={`md:text-xl md:leading-[36px] font-medium Urbanist text-center block mx-auto ${item.isHighlighted === true ? 'text-white' : 'text-shade/80'} `}>
                            {item.desc}
                        </span>
                    </div>
                    <div>
                        <span className={`md:text-xl md:leading-[36px] font-medium Urbanist text-center block mx-auto mt-10 ${item.isHighlighted === true ? 'text-white' : 'text-shade/80'} `}>
                            {item.or}
                        </span>
                        <h5 className={`text-lg font-bold Urbanist text-center ${item.isHighlighted === true ? 'text-white' : 'text-shade'} `}>
                            {item.priceopt}
                        </h5>
                    </div>
                    <button
                        type='submit'
                        className={`px-6 py-4 rounded-[67px] text-white hover:text-primary Urbanist text-base leading-[19.2px] font-semibold bg-primary hover:bg-transparent border-2 border-primary hover:border-primary outline-none w-full mt-8`}
                    >
                        Choose Plan
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Pricing

const pricingData = [
    {
        time: "Monthly",
        title: 'Original',
        price: "$88",
        desc: "(billed annually)",
        priceopt: "$100/Monthy",
        or: "or",
        features: [1, 2, 3],
        isHighlighted: false,

    },
    {
        time: "Seasonality",
        title: 'Special Discount - Long tern Subscription',
        price: "$80",
        desc: "($240/season)",
        priceopt: "",
        or: "",
        features: [1, 2, 3],
        isHighlighted: true,

    },
    {
        time: "Annually",
        title: 'Special Discount - Long tern Subscription',
        price: "$66",
        desc: "($792/year)",
        priceopt: "",
        or: "",
        features: [1, 2, 3],
        isHighlighted: false,

    },
];