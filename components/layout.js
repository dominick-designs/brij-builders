import Head from 'next/head'
import styles from '../styles/Home.module.css'
import layoutstyles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import Footer from '../components/footer'
import Meta from '../components/meta'
import Navigation from '../components/navigation'


const name = 'Brij Builders'
export const siteTitle = 'Brij Builders'

export default function Layout({ children, home }) {
    return (
        <div className={layoutstyles.container}>
            <Meta />

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Navigation />
       

            <header className={layoutstyles.header}>
                {home ? (
                    <>
                        <img
                            src="logo/brij-logo-94.png"
                            className={`${layoutstyles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="logo/brij-logo-94.png"
                                        className={`${layoutstyles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>






            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}


        
            <Footer />


        </div>
    )
}