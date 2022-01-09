import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LargCard from "../components/LargCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ explorData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-8">
        <section className="pt-6">
          <h1 className="text-4xl font-bold pb-6">Explor Nearby</h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {explorData?.map((item, index) => (
              <SmallCard
                key={index}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section className="">
          <h1 className="text-4xl font-bold py-8">Live Anywhere</h1>
          <div className="flex space-x-4 p-3 -ml-3 overflow-x-scroll overflow-y-hidden cards-custom-scrollbar">
            {cardsData?.map((item, index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <section className="py-10">
          <LargCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            desc="Wishlists curated by Airbnb."
            btnText="Get Inspired"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const explorData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      explorData: explorData,
      cardsData: cardsData,
    },
  };
}
