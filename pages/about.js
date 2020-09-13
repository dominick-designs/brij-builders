import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function About() {

    return (
        <Layout >
            <Head>
                <title >{siteTitle}</title>
            </Head>

            <section>
                <h1 className={utilStyles.lightText}>Mission</h1>

                <p>

                    Brij Builders explores the potential of the world within us, the nature of the world around us, and the mystery behind it all.
                  </p>

                <p>

                    It is our hope to create bridges that unite people in reflection and discussion.
                </p>
                <p>
                    If we inspire one person's life journey, we’ll consider ourselves successful.

              </p>


            </section>
            <section >
                <h1 className={utilStyles.lightText}>About </h1>
                <p>
                    Bridge Builders is a Hawaii Island collective of friends, teachers, skeptics, and incorrigible seekers who love to ponder the possibilities. It’s our shared passion to question just about everything through the eyes of good old, clear-headed common sense.
                </p>
                <p>

                    We will always try to ask the questions that don’t get asked enough. For us, thinking about and discussing the potential of the world within us, the nature of the world around us, and what makes it all tick, is not only important … it’s fun.
                </p>
                <p>
                    For the sake of conversation and exploration, we’ll also share some thoughts that we hope you’ll find both universal and uplifting. May they unite us all in reflection and discussion!
             </p>
            </section>

            <section>
                <h1 className={utilStyles.lightText}>Team </h1>

                <p>
                    Jessica Lane:
                    Jessica is an artist & professional chef. She is passionate about turning people onto plant based cuisine, & has spent time as the chef/manager at yoga retreat centers, and in vegan & fine dining restaurants. She loves eating, laughing, singing, reading, watching documentary films, & considers herself to be an “incurable optimist”. She’s always ready to discuss existential topics, & has been an armchair philosopher/avant garde therapist her entire life. Raised in a rural area outside of Philadelphia, she now happily resides in Hawaii with her cat, Brudder.
                </p>

                <p>
                    Griffin Bravo:
                    Born in Southern California, Griffin Bravo grew up around multiple cultures. Raised by a deeply spiritual father, youngest of 3 brothers, he had his own “walk-about” at around 19 years old.  He travelled to many different countries with his wife trying to find answers to life’s deeper questions. Listening to different religious preachers, and studying various philosophical writings, he explored life. Now at the dawn of his 40th birthday, he is still married and raising his 2 daughters on Big Island of Hawaii. He works helping persons with disabilities, and in his free-time is probably watching a good superhero movie, painting, or just chillin with friends.
                </p>

                <p>
                    Dominick:
                    Dominick is an independent web and mobile application developer focusing on supporting local nonprofits. He is actively involved in the community engaged in various activities including teaching youngsters full stack JavaScript software programming.
                </p>

            </section>


        </Layout >
    );
}