"use client";
import Nav from "@/app/component/nav";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import AllCourses from "@/app/component/all_courses";
import AllCategories from "@/app/component/all_categories";
import { Fragment } from "react";

export default function Home ({ data, settings }) {

    return (

        <Fragment>

            <Nav categories={data.categories} settings={settings}/>
            
            <div className="container">

                <Header settings={settings}/>

                <AllCourses data={data.categories}/>

                <AllCategories data={data.categories}/>

                <Footer settings={settings}/>

            </div>

        </Fragment>

    )

}
