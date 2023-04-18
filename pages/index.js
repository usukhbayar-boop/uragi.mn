import React, { useState, useEffect } from 'react';
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
import { app, database } from "../firebaseConfig";
import { useRouter} from "next/router";


export default function Home1() {
    let router = useRouter();
    // useEffect(() => {
    //     let token = sessionStorage.getItem('Token');
    
    //     if(token) {
          
    //     }
    //   }, [])
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
