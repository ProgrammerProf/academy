"use client";
import Nav from "@/app/component/nav";
import Banner from "@/app/component/banner";
import Features from "@/app/component/features";
import Footer from "@/app/component/footer";
import { Fragment } from "react";

export default function About ({ categories, settings }) {

    return (

        <Fragment>

            <Nav categories={categories} settings={settings}/>
            
            <div className="container">

                <Banner title="من نحن" 
                    details={`
                    هى منصة تعليمية إلكترونية توفر خدمات التدريب والتعليم عن بعد
                    وتقدم مجموعة متنوعة من المواد التعليمية و مجموعة واسعة من
                    الدورات التدريبية والأنشطة التعليمية لجميع الأعمار كما تقدم
                    المنصة دورات الدعم للطالب وأولياء الأمور.
                    `}
                />

                <div className="home about"><Features settings={settings}/></div>

                <Footer pae="من نحن" settings={settings}/>

            </div>

        </Fragment>

    )

}
