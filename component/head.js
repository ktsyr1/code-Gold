import Header from 'next/head'
import { useRouter } from 'next/router';
export default function Head(props) { 
    let route = useRouter()
    const { page, p, home, end, app } = props
    // page app
    let title, image, ends, mods = ''
    let description, des_fb

    let Domain = process && process.env && process.env.Domain
    if (route.pathname === "/app/category/[name]") {
        title = 'pesktop |' + p + page
        image = props.image ? props.image : '/images/pesktopAndroid.png'

    } else if (route.pathname.slice(0, 10) === "/app/[app]") {
        if (app != false) {
            let { name, mod, version, icon } = app
            mod.map(mod => {
                mods = ' ' + mods + mod + ' '
            })
            title = p + name + mods + " v" + version + end
            let description_end = ', ....برابط مباشر '
            description = app.about.slice(0, 150 - description_end.length) + description_end
            des_fb = "تحميل تطبيق " + name + mods + ' v' + version + ' مجانا برابط مباشر '
            // image = app.image ? app.image[0].split('=')[0] : '/images/pesktopAndroid.png'
        }
    } else {
        title = home ? home : page ? p + page : ''
        image = props.image ? props.image : '/images/pesktopAndroid.png'
        ends = end ? end : ''
        description = 'تحميل جميع برامج الويندوز والأندرويد والماك والأنظمة مع الكراكات بروابط مباشرة وسريعة وتدعم الأستكمال مع امكانية تحميل الكراكات منفصلة لكل البرامج'
    }
    let ga
    if (typeof window != 'undefined') {
        // window.dataLayer = window.dataLayer || [];
        // function gtag() { dataLayer.push(arguments) }
        // gtag('js', new Date());

        // gtag('config', 'G-NZT5P1ZG3W');

    }
    return (
        <>
            <Header>
                {/* <meta charset="UTF-8" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> {title} {ends}</title>
                {/* <meta name="description" content={description} /> */}
                {/* <meta name="theme-color" content="#ffffff" /> */}
                <meta name="keywords" content={props.keywords} />

                {/* --------------- files --------------- */}
                {/* <link rel="manifest" href="/manifest.json" /> */}
                {/* <link rel="apple-touch-icon" href="/images/logo.png" /> */}

                {/* favicon.ico */}
                {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" /> */}
 
                {/* <meta name="author" content="https://pesktop.vercel.app/" /> */}

                {/* google */}
                {/* <meta property="og:locale" content="ar_AR" />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title + ends} />
                <meta property="og:description" content={des_fb} />
                <meta property="og:url" content="https://android.pesktop.com/" />
                <meta property="og:site_name" content="PeskTop android بيسك توب اندرويد" /> */}  


                {/* facebook */}
                <meta property="fb:page_id" content="1398534473631326" />
                <meta property="fb:app_id" content="" />
                <meta property="article:publisher" content="https://www.facebook.com/pesktop.co/" />
                <meta property="profile:username" content="https://android.pesktop.com" />

                {/* twitter */}
                {/* <meta name="twitter:card" content="summary_large_image" />
                // <meta name="twitter:site" content="@PesktopCo" />
                <meta name="twitter:creator" content="@PesktopCo" />
                <meta name="twitter:title" content="PeskTop بيسك توب" />
                <meta name="twitter:description" content={des_fb} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:domain" content="android.pesktop.com" /> */}

                <script async defer data-domain="android.pesktop.com" src="https://analytics.wifi4games.com/js/plausible.js"></script>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: ` {
                            "@context": "http://schema.org",
                            "@type": "store apps",
                            "name": "pesktop android",
                            "url": "https://android.pesktop.com",
                            "image": "${image}",
                            "description": "${description}",
                            "author": "Islam Edlby",
                            "sameAs": [
                                "https://twitter.com/PesktopCo",
                                "https://www.facebook.com/pesktop.co",
                                "https://www.instagram.com/pesktop.co"
                            ]

                        }`
                    }}>
                </script>
                {/* <script data-ad-client="ca-pub-7350624020470624" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                        `}}>
                </script> */}
            </Header>
        </>
    )
}