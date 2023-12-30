"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import AllCourses from "@/app/component/all_courses";
import { Fragment } from "react";

export default function Category ({ data, categories, settings }) {

    return (

        <Fragment>

            <Nav categories={categories} settings={settings}/>
            
            <div className="container">

                <AllCourses data={[data]} hide/>

                <Footer page="تفاصيل القسم" settings={settings}/>

            </div>

        </Fragment>

    )

}
