import React from 'react';
import { BsChevronCompactUp } from 'react-icons/bs';

function Question_Generator() {

    const [openTab, setOpenTab] = React.useState(1);

    return (
        <section className='py-20 bg-shade/5'>
            <div className='container mx-auto px-4 '>
                <div className='md:w-3/5 w-full'>
                    <div className='bg-white p-5 rounded-2xl'>
                        <div className='flex justify-between p-2'>
                            <h5 className='text-xl font-bold'>
                                Choose Articles from News
                            </h5>
                            <BsChevronCompactUp size={28} />
                        </div>
                        <div className='bg-shade/5 p-6 rounded-lg '>
                            <ul
                                className="flex list-none flex-wrap flex-row space-x-3 p-1.5"
                                role="tablist"
                            >
                                <li className="">
                                    <a
                                        className={
                                            "text-[26px] leading-[22px] font-normal Urbanist " +
                                            (openTab === 1
                                                ? "text-[#024C86] underline"
                                                : "text-shade/60")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        BBC
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        className={
                                            "text-[26px] leading-[22px] font-normal Urbanist " +
                                            (openTab === 2
                                                ? "text-[#072D4B] underline"
                                                : "text-shade/60")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        SCMP
                                    </a>
                                </li>
                            </ul>

                            <div className="">
                                <div className="py-5 flex-auto">
                                    <div className="tab-content tab-space">
                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                            <ul
                                                className="flex list-none flex-wrap flex-row space-x-3 p-1.5"
                                                role="tablist"
                                            >
                                                <li className="border border-[#6EB6F8] rounded-[10px] py-2 p-6 bg-white">
                                                    <a className={"text-[17px] leading-[24px] font-medium Urbanist text-[#024C86]"}
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(1);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link1"
                                                        role="tablist"
                                                    >
                                                        Acticle theme
                                                    </a>
                                                </li>
                                                <li className="border border-[#6EB6F8] rounded-[10px] py-2 p-6 bg-white">
                                                    <a
                                                        className={"text-[17px] leading-[24px] font-medium Urbanist text-[#024C86]"}
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(2);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link2"
                                                        role="tablist"
                                                    >
                                                        Recent
                                                    </a>
                                                </li>
                                                <li className="border border-[#6EB6F8] rounded-[10px] py-2 p-6 bg-white">
                                                    <a
                                                        className={"text-[17px] leading-[24px] font-medium Urbanist text-[#024C86]"}
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(2);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link2"
                                                        role="tablist"
                                                    >
                                                        500 words
                                                    </a>
                                                </li>
                                                <li className="border border-[#6EB6F8] rounded-[10px] py-2 p-6 bg-white">
                                                    <a
                                                        className={"text-[17px] leading-[24px] font-medium Urbanist text-[#024C86]"}
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenTab(2);
                                                        }}
                                                        data-toggle="tab"
                                                        href="#link2"
                                                        role="tablist"
                                                    >
                                                        Lexile Grade10
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="mt-3">
                                                <ul className='grid gap-3'>
                                                    <li className='shadow rounded-[10px] py-2 p-6 bg-white text-[17px] leading-[24px] font-medium Urbanist text-[#024C86]'>
                                                        New York City declares emergency over migrant 'crisis'
                                                        <span className='text-sm font-normal text-shade/60 ml-3'>
                                                            865words | Lexile 1010 (Grade10) | 2022/10/22
                                                        </span>
                                                    </li>
                                                    <li className='shadow rounded-[10px] py-2 p-6 bg-white text-[17px] leading-[24px] font-medium Urbanist text-[#024C86]'>
                                                        Petrol, diesel prices - July 6: Fuel prices unchanged
                                                        <span className='text-sm font-normal text-shade/60 ml-3'>
                                                            675words | Lexile 950 (Grade9) | 2022/9/22
                                                        </span>
                                                    </li>
                                                    <li className='shadow rounded-[10px] py-2 p-6 bg-white text-[17px] leading-[24px] font-medium Urbanist text-[#024C86]'>
                                                        Petrol, diesel prices - Fuel prices unchanged after touching record high
                                                        <span className='text-sm font-normal text-shade/60 ml-3'>
                                                            675words | Lexile 950 (Grade9) |
                                                        </span>
                                                    </li>
                                                </ul>
                                                <p className='text-[#6491B4] text-[17px] leading-[24px] font-medium Urbanist text-right mt-3'>
                                                More
                                                </p>
                                            </div>
                                        </div>
                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                            <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
                                                <div>
                                                    <h3 className="md:text-[42px] md:leading-[50px] text-3xl font-extrabold Urbanist text-primary mb-5">
                                                        Select Articles
                                                    </h3>
                                                    <ul className="list-decimal list-inside gap-3 grid">
                                                        <li className="text-base font-medium text-shade/90">
                                                            Select from different themes, difficulty and length of news
                                                        </li>
                                                        <li className="text-base font-medium text-shade/90">
                                                            Input the text
                                                        </li>
                                                        <li className="text-base font-medium text-shade/90">
                                                            Select the level of simplification of the article
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question_Generator