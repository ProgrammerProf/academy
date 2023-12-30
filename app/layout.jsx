import "@/public/sass/main.scss";

export default function Layout({ children }) {

    return (

        <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <link rel="icon" href="/media/public/logo.png"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </head>
            <body>
                {children}
            </body>
        </html>

    )

}
