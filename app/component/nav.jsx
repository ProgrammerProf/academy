"use client";
import Link from "next/link";
import $ from "jquery";
import { useEffect } from "react";

export default function Nav ({ categories, settings }) {

    const show_side = () => {

        $(".side-bar").fadeIn(100).css("display", "flex");
        setTimeout(_ => $(".side-bar > div").css("margin", "0"));
        
    }
    const hide_side = () => {

        $(".side-bar > div").css("margin-right", "-20rem");
        
        setTimeout(_ => $(".side-bar").fadeOut(200));
        
    }
    useEffect(() => {

        $("nav .links a").each(function(){
            let url = `${location.protocol}//${location.host}${$(this).attr("href")}`;
            if ( location.href === url ) return $(this).addClass('active');
        });
        $(".side-bar a").each(function(){
            let url = `${location.protocol}//${location.host}${$(this).attr("href")}`;
            if ( location.href === url ) return $(this).addClass('active');
        });

    }, []);

    return (

        <nav>

            <main>

                <div className="links">

                    <Link href="/contact">تواصل معنا</Link>
                    <Link href="/about">من نحن</Link>
                    <Link href="/categories">أقسام الأكاديمية</Link>
                    <Link href="/">الصفحة الرئيسية</Link>

                </div>

                <div>

                    <Link href="/" className="logo">

                        <img src="/media/public/logo.png"/>

                    </Link>

                    <div className='close-side' onClick={show_side}>

                        <span className="material-symbols-outlined">menu</span>

                    </div>

                </div>

            </main>

            <div className="side-bar" onClick={_ => $(_.target).hasClass('side-bar') && hide_side()}>

                <div>

                    <div className="first full-width flex flex-space">

                        <div className="close circle pointer flex" onClick={hide_side}>
                            <span className="material-symbols-outlined go-icon">close</span>
                        </div>

                        <Link href="/" className="flex">{settings.name}</Link>

                    </div>

                    <ul className="full-width flex flex-column">

                        <Link href="/">
                            <span>الصفحة الرئيسية</span>
                            <span className="material-symbols-outlined icon">home</span>
                        </Link>
                        <Link href="/categories">
                            <span>الأقسام</span>
                            <span className="material-symbols-outlined icon">category</span>
                        </Link>
                        <hr />
                        <Link href="/about">
                            <span>من نحن</span>
                            <span className="material-symbols-outlined icon margin">help</span>
                        </Link>
                        <Link href="/contact">
                            <span>تواصل معنا</span>
                            <span className="material-symbols-outlined icon margin">call_log</span>
                        </Link>

                    </ul>

                </div>

            </div>

        </nav>

    )

}
