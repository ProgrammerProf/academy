"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import AllCategories from "@/app/component/all_categories";
import { Fragment } from "react";

export default function Categories ({ data, settings }) {

    return (

        <Fragment>

            <Nav categories={data} settings={settings}/>
            
            <div className="container">

                <div className="categories-page">

                    <AllCategories data={data}/>
                
                </div>

                <Footer pae="أقسام الأكاديمية" settings={settings}/>

            </div>

        </Fragment>

    )

}
