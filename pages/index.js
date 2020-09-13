import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/blog-posts'
import DateFormater from '../components/date-formater'




export default function Home({ allPostsData }) {
  return (


    <div>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <Layout home>


        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <DateFormater dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>


        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">{siteTitle}</a>
          </h1>

        

          <p className={styles.description}>
            Get started by editing{' '}
          </p>

          <div className={styles.grid}>

            <div className={styles.card}>
              <Link href="/about" >
                <a >
                  <h3>Mission &rarr;</h3>
                </a>
              </Link>
              <p>

                Brij Builders explores the potential of the world within us, the nature of the world around us, and the mystery behind it all.
                  </p>
              <br />
              <p>

                It is our hope to create bridges that unite people in reflection and discussion.
                </p>
              <br />
              <p>
                If we inspire one person's life journey, we’ll consider ourselves     successful.

              </p>

            </div>


            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            </a>
          </div>
        </main>
      </Layout>


    </div>



  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
