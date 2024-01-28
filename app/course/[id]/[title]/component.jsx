"use client";
import Nav from "@/app/component/nav";
import Footer from "@/app/component/footer";
import Stars from "@/app/component/stars";
import { host, fix_date, fix_number, print } from "@/public/script/public";
import { Fragment, useEffect } from "react";
import Link from "next/link";
import {MdInfo} from "react-icons/md";
import {TbWorld} from "react-icons/tb";
import {BiCheck} from "react-icons/bi";
import $ from "jquery";

export default function Course ({ data, categories, settings }) {

    const toggle_video = () => {

        if ( $("video")[0]?.paused ) $("video")[0]?.play();
        else $("video")[0]?.pause();

    }

    return (

        <Fragment>

            <Nav categories={categories} settings={settings}/>
            
            <div className="container">

                <div className="course-page">

                    <main className="lecturer">

                        <div className="data">

                            <div>

                                <div className="name">

                                    <h1>{data.lecturer_name}</h1>

                                    <p>{data.lecturer_location}</p>

                                </div>

                                <div className="image">

                                    <img src={`${host}${data.lecturer_image}`}/>

                                </div>

                            </div>

                            <div>

                                <h2>{data.description}</h2>

                            </div>

                            <div className='btns'>

                                <Link href={`tel:${data.phone}`}>
                                    أو اتصل بنا
                                </Link>

                                <Link href={`https://web.whatsapp.com/send/?phone=${data.phone}`} target="_blank">
                                    إحجز الان
                                </Link>

                            </div>
                            
                        </div>

                        <div className="video">

                            {
                                data.video[1] === 'video' ?
                                <video src={`${host}${data.video[0]}`} autoPlay loop></video> :
                                <img src={`${host}${data.video[0]}`}/>
                            }

                            <div className="cover" onClick={toggle_video}></div>
                        
                        </div>

                    </main>

                    <main className='intro'>

                        <div className='image'>

                            <img src={`${host}/${data.image}`}/>
                            
                        </div>

                        <div className='details'>

                            <div className='category'><span>{data.category}</span></div>

                            <h1><span>{data.name}</span></h1>

                            <h2><span>{data.description}</span></h2>

                            <div className='rating'>
                                
                                <span>{fix_number(data.views)}</span>

                                <span>( {fix_number(data.reviews)} )</span>

                                <Stars rate={data.rate}/>

                            </div>

                            <ul>

                                <li>
                                    <span>{data.lecturer}</span>
                                    <span>المحاضر :</span>
                                </li>
                                <li>
                                    <span>اخر تحديث : {fix_date(data.date)}</span>
                                    <span><MdInfo /></span>
                                </li>
                                <li>
                                    <span>اللغة العربية</span>
                                    <span><TbWorld /></span>
                                </li>

                            </ul>

                            <div className='pricing'>

                                <span>{data.old_price} R.S</span>

                                { data.old_price > data.new_price && <span>{data.new_price} R.S</span> }

                            </div>

                            <div className='btns'>

                                <Link href={`tel:${data.phone}`}>
                                    أو اتصل بنا
                                </Link>

                                <Link href={`https://web.whatsapp.com/send/?phone=${data.phone}`} target="_blank">
                                    إحجز الان
                                </Link>

                            </div>

                        </div>
                        
                    </main>

                    <main className='info'>

                        <div className='learn'>

                            <h1>ماذا ستتعلم فى هذا الكورس ؟</h1>

                            <ul>
                                {
                                    JSON.parse(data.advantages).map((item, index) => 
                                        <li key={index}>
                                            <span><BiCheck /></span>
                                            <span>{item}</span>
                                        </li>
                                    )
                                }
                            </ul>

                        </div>

                        <div className='content'>

                            <h1>محتويات الكورس</h1>

                            <ul className="between">

                                { JSON.parse(data.content).map((item, index) => <li key={index}><span>{item}</span></li>) }

                            </ul>

                        </div>

                    </main>

                </div>

                <Footer page="تفاصيل الكورس" settings={settings}/>

            </div>

        </Fragment>

    )

}
