import Head from "next/head";
import Hero from "@layouts/hero.jsx"
import Navbar from "@layouts/navbar";
import Clients from "@/ui/layouts/clients";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arsha Template</title>
        <meta name="description" content="Arsha The Soultion for Your business " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="hero-container">
          <Hero />
        </div>
      </section>
      <Clients />
    </>
  );
}
