import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Olá, meu nome é Gustavo! Sou um engenheiro apaixonado por tecnologias. Você pode entrar em contato comigo pelo meu perfil no <a href= "https://twitter.com/profglac">Twiter</a></p>
        <p>
          (Este é um exemplo de website que você irá aprender a construir em meu curso {' '}
          <a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>
	  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}