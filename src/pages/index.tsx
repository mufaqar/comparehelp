import Head from 'next/head';
import { AboutUs, Banner, Feedback, HowItWorks, Partners, UsingHelp, WhyUs } from '../components/imports';

export default function Home() {
  return (
    <>
      <Head>
        <title>CompareHelp | Collection of Personal Data Statement</title>
        <meta name="description" content="Generate several questions in a single click." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Partners />
      <WhyUs />
      <UsingHelp />
      <HowItWorks />
      <Feedback />
      <AboutUs />
    </>
  )
}
