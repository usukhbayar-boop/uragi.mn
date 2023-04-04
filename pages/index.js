import Layout from '@/components/layout/Layout';
import AboutOne from '@/components/sections/homepage/AboutOne';
import AppOne from '@/components/sections/homepage/AppOne';
import BenefitsOne from '@/components/sections/homepage/BenefitsOne';
import ClientOne from '@/components/sections/homepage/ClientOne';
import CounterOne from '@/components/sections/homepage/CounterOne';
import CtaOne from '@/components/sections/homepage/CtaOne';
import FaqOne from '@/components/sections/homepage/FaqOne';
import FeatureOne from '@/components/sections/homepage/FeatureOne';
import HeroOne from '@/components/sections/homepage/HeroOne';
import HeroFive from '@/components/sections/homepage/HeroFive';
import PricingOne from '@/components/sections/homepage/PricingOne';
import SuccessOne from '@/components/sections/homepage/SuccessOne';
import TestimonialOne from '@/components/sections/homepage/TestimonialOne';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf0A0nWp6zYAur6Rg1l7706FzWHrHq2aU",
  authDomain: "uragi-7062f.firebaseapp.com",
  projectId: "uragi-7062f",
  storageBucket: "uragi-7062f.appspot.com",
  messagingSenderId: "166372434640",
  appId: "1:166372434640:web:54196c8ba5e2b74a3bf4d5",
  measurementId: "G-PW8SEYJM3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default function Home1() {
    return (
        <>
            <Layout
                headerLayout={4}
                footerLayout={6}
                logo="logo" // logo, logo-flat, logo-5
                verticalLine // if vertical line true, show vertical line show
            >
                <HeroOne bgPath="home-1/masthead" />
                {/* <ClientOne /> */}
                <AboutOne />
                {/* <BenefitsOne /> */}
                <SuccessOne />
                {/* <FeatureOne /> */}
                
                <CounterOne />
                {/* <AppOne /> */}
                <TestimonialOne />
                <PricingOne />
                <FaqOne />
                {/* <CtaOne /> */}
            </Layout>
        </>
    )
}
