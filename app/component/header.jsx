"use client";

export default function Header ({ settings }) {

    return (

        <header>

            <main>

                {/* <div className='data'>

                    <h1>{settings.name}</h1>

                    <p>
                        مع قلة المحتوى العربى فى الوطن العربى نقدم لكم أقوى الكورسات فى التصميم والبرمجة باللغة العربية
                         . تحت إشراف مهندسين برمجة محترفين وذوى خبرة عالية فى المجال
                    </p>

                </div> */}

                <div className="image">

                    <video src="/media/header/4.mp4" onClick={(e) => e.target.play()} autoPlay loop muted></video>

                </div>

            </main>

        </header>

    )

}
