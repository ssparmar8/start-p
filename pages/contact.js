import React from 'react';
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactInfo from '@/components/Contact/ContactInfo';
import GoogleMap from '@/components/Contact/GoogleMap';
import ContactForm from '@/components/Contact/ContactForm';

const Contact = () => {
    return (
        <>
            <NavbarStyleFour />

            <PageBanner pageTitle="Contact Us" />

            <ContactInfo />

            <GoogleMap />

            <ContactForm />
           
            <Footer />
        </>
    )
}

export default Contact;