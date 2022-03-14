import Head from 'next/head'
import Typewriter from 'typewriter-effect';
import WOTD from './components/wotd';


// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className="overflow-hidden flex flex-col min-h-screen items-center justify-center align-middle">
      <div className="flex flex-col items-center justify-center h-full">
        <Head>
          <title>Katoeypedia</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Katoeypedia" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 text-center p-8">
          <div className="flex-shrink-0 flex items-center">
            {/* <TableIcon className="block h-24 w-24" aria-hidden="true" /> */}
            <div id='typewriter' className="ml-2 font-medium text-6xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Katoey')
                    .pauseFor(500)
                    .typeString('pedia')
                    .start();
                }}
              />
            </div>
          </div>

          <p className="mt-3 text-2xl break-words mb-12">Hello, welcome.</p>
        </main>
      </div>
      <div className="w-1/2 sm:w-1/3">
        <WOTD />
      </div>
    </div>
  )
}
