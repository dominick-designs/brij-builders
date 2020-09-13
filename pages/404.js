import styles from '../styles/Home.module.css'
import Link from 'next/link'

// pages/404.js
export default function Custom404() {
    return (
        <>
            <h1>404 - Page Not Found</h1>

            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </>
    )
}