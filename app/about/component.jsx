"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import { Fragment } from "react";

export default function About ({ categories, settings }) {

    return (

        <Fragment>

            <Nav categories={categories} settings={settings}/>
            
            <div className="container">

                <main style={{ height: "30rem" }} className="flex">

                    من نحن

                </main>

                <Footer pae="من نحن" settings={settings}/>

            </div>

        </Fragment>

    )

}
