"use client";
import { useEffect } from "react";
import Card from "@/app/component/card";
import $ from "jquery";

export default function Cards ({ data, big }) {

    const show = () => {

        $(".cards-loader").fadeOut(200);
        $(".cards .list-cards").fadeIn(1000).css('display', 'flex');

    }
    useEffect(() => {
        
        show();
        setTimeout(show, 200);
        setTimeout(show, 1000);
        setTimeout(show, 2000);
        setTimeout(show, 3000);

    });
    
    return (

        <div className={`cards ${big && 'big' }`}>

            <div className="loader fill cards-loader"></div>

            <div className="list-cards">

                { data.map((item, index) => <Card key={index} data={item} big={big}/>) }

            </div>

        </div>
        
    )

}
