// Importing Dependencies //
import React from 'react';
import Head from "next/head";


// Importing components
import Hero from "./components/Hero";
import Réalisations from "./components/Réalisations";
import Services from "./components/Services";
import Matériel from "./components/Matériel";

export function Home() {

  return (
        <div className="main">
            <Head>
                <title>Airval Studio — Studio d'enregistrement</title>
                <meta name="description" content="This is blurblur's official website. blurblur is a french singer, songwriter and record producer renowned for his sensual and captivating voice. His music is a blend of pop, electronic, and R&B influences."></meta>
                <link rel="icon" href="/favicon.ico" />
                <meta name="facebook-domain-verification" content="" />
            </Head>

            {/* COMPONENTS */}
            <Hero/>
            <Réalisations/>
            <Services/>
            <Matériel/>
            {/*<Contact/>*/}
        </div>
  )
}

export default Home;