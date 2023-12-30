"use client";
import Stars from "@/app/component/stars";
import { host } from "@/public/script/public";
import Link from "next/link";

export default function Card ({ data, big }) {

    return (

        <div className="card">
            {
                big ?

                <Link href={`/category/${data.id}/${data.name}`} className="big">

                    <div className='image'><img src={`${host}${data.image}`}/></div>

                    <div className="info"><h1>{data.name}</h1></div>

                </Link> :

                <div className="small">

                    <div className='image'>

                        <img src={`${host}${data.image}`}/>

                    </div>

                    <div className="info">

                        <h1>{data.name}</h1>

                        <p>{data.lecturer}</p>

                        <div className='rating'>

                            <span>({data.reviews})</span>

                            <Stars rate={data.rate}/>

                        </div>

                        <div className='pricing'>

                            <span>{data.old_price} R.S</span>

                            { data.old_price > data.new_price && <span>{data.new_price} R.S</span> }

                        </div>

                    </div>

                    <div className='btns'>

                        <Link href={`https://web.whatsapp.com/send/?phone=${data.phone}`} target="_blank">إحجز الان</Link>

                        <Link href={`/course/${data.id}/${data.name}`}>تفاصيل الكورس</Link>

                    </div>

                </div>
            }
        </div>
        
    )

}
