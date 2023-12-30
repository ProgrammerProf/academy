"use client";
import { useState } from "react";
import Cards from "@/app/component/cards";
import $ from "jquery";

export default function All_Courses ({ data, hide }) {

    const [category, setCategory] = useState(data[0] || {});
    const [Id, setID] = useState(data[0].id);
    let count = 0;
    data.forEach(_ => count += _.courses.length);

    const change = ( id ) => {
    
        if ( Id === id ) return;
        $(".all-courses .cards .list-cards").hide();
        $('.tags').find('li').removeClass('active');
        $(`.tags li#${id}`).addClass('active');
        setCategory(data.filter((item) => item.id === id)[0] || {});
        setID(id);

    }
    return (

        <div className="main all-courses">

            <main>

                <div className="full-width flex flex-column">

                    { !hide && <div className="title"><span>مجموعة واسعة من الدورات</span></div> }

                    <div className="p">
                      
                        <span>
                            
                            إختار الكورس المناسب من بين ( {hide ? category.courses.length : count} )
                             كورس مع إضافة فيديوهات جديدة كل شهر - {category.name}

                        </span>
                                          
                    </div>

                </div>
                
                <div className="tags">

                    <ul>
                        {
                            data.map((item, index) => 
                                <li key={index} id={item.id} onClick={_ => change(item.id)} className={`${!index && 'active'}`}>
                                    {item.name}
                                </li>
                            )
                        }
                    </ul>

                </div>

                <Cards data={category.courses || []}/>

            </main>

        </div>
        
    )

}
