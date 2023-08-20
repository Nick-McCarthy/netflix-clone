import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { Movie } from '@/types'
import requests from '../utils/requests'

interface Props {
  netflixOriginals: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  topRated,
}: Props) => {


  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Moives" movies={actionMovies} />
          <Row title="Comedy Movies" movies={comedyMovies} />
          <Row title="Horror Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
        </section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
    },
  }
}