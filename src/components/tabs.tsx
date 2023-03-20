import Image from "next/image";
import React from "react";
import Article1 from '../../public/images/article1.png';


const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex md:mb-20 mb-10 list-none flex-wrap flex-row p-1.5 max-w-[650px] mx-auto bg-shade/10 rounded-[40px]"
                        role="tablist"
                    >
                        <li className="-mb-px mr-1 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-base leading-[20px] px-2 py-3 block rounded-[32px] Urbanist " +
                                    (openTab === 1
                                        ? "text-white bg-primary font-bold"
                                        : "text-shade/60 font-medium")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Select articles
                            </a>
                        </li>
                        <li className="-mb-px mr-1 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-base leading-[20px] px-2 py-3 block rounded-[32px] Urbanist " +
                                    (openTab === 2
                                        ? "text-white bg-primary font-bold"
                                        : "text-shade/60 font-medium")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Generate 02
                            </a>
                        </li>
                        <li className="-mb-px mr-1 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-base leading-[20px] px-2 py-3 block rounded-[32px] Urbanist " +
                                    (openTab === 3
                                        ? "text-white bg-primary font-bold"
                                        : "text-shade/60 font-medium")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Form quiz
                            </a>
                        </li>
                    </ul>
                    <div className="">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
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
                                        <div>
                                            <Image src={Article1} alt="" />
                                        </div>
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
                                        <div>
                                            <Image src={Article1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
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
                                        <div>
                                            <Image src={Article1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return (
        <>
            <Tabs />
        </>
    )
}