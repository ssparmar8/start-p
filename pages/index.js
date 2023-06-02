import React from 'react';
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from '@/components/Home/MainBanner';
import WhatWeDo from '@/components/Home/WhatWeDo';
import DiscoverArea from '@/components/Home/DiscoverArea';
import Services from '@/components/Home/Services';
import IndustriesWeServe from '@/components/Home/IndustriesWeServe';
import NewsletterStyleTwo from '@/components/Common/NewsletterStyleTwo';
import Footer from "@/components/_App/Footer";

const BigdataAnalytics = () => {
    return (
        <>
            <NavbarStyleFour />

            <MainBanner />

            <WhatWeDo />

            <DiscoverArea />

            <Services />

            <IndustriesWeServe />

            <NewsletterStyleTwo />
            
            <Footer />
        </>
    )
}

export default BigdataAnalytics;