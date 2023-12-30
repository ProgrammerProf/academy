"use client";
import Cards from "@/app/component/cards";

export default function All_Categories ({ data }) {

    return (

        <div className="main">

            <main>

                <div className="title"><span>أحدث الأقسام</span></div>

                <Cards data={data} big/>

            </main>

        </div>
        
    )

}
