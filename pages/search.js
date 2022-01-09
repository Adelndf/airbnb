import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import Footer from "./../components/Footer";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Btn = ({ children }) => {
  return <button className="sortingBtn">{children}</button>;
};

function Search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const startDateFormat = format(new Date(startDate), "dd MMMM yy");
  const endDateFormat = format(new Date(endDate), "dd MMMM yy");
  const range = `${startDateFormat} - ${endDateFormat}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range}`} />
      <main className="flex max-w-7xl mx-auto px-8 py-16 lg:space-x-4">
        <section className="flex-[2]">
          <p className="text-xs text-gray-500">
            300+ stays | {range} | for{" "}
            <span className="font-bold">{numOfGuests}</span> guests
          </p>
          <h1 className="text-2xl font-bold mb-4">
            Stays in <span className="text-red-400">{location}</span>
          </h1>
          <div className="hidden md:inline-flex space-x-3 mb-4 whitespace-nowrap">
            <Btn>Cancellation Flexibility</Btn>
            <Btn>Type of Place</Btn>
            <Btn>Price</Btn>
            <Btn>Rooms and Beds</Btn>
            <Btn>More Filters</Btn>
          </div>
          <div className="space-y-8 md:space-y-8">
            {searchResult.map((item, index) => (
              <InfoCard
                key={index}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden lg:inline-flex rounded-lg overflow-hidden h-[600px] bg-gray-300 sticky top-20 shadow-2xl flex-[1]">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await await fetch(
    "https://links.papareact.com/isz"
  ).then((res) => res.json());

  return {
    props: {
      searchResult: searchResult,
    },
  };
}
