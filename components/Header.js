import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder = "Start search" }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
    setSearchInput("");
  };

  return (
    <header className="bg-white w-full shadow-md p-4 md:px-7 sticky top-0 z-50">
      <div className="max-w-[1400px] w-full flex items-centear mx-auto relative">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="flex-1 cursor-pointer relative h-8 md:h-10 flex justify-start"
        >
          <Image
            src="/images/Airbnb-logo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* center */}
        <div className="flex-1 sm:flex justify-center">
          <div className="flex flex-1 items-center bg-white border-2 border-gray-300 p-1 rounded-full">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder={placeholder}
              className="px-2 h-7 outline-none flex-1 text-sm md:text-base text-gray-600 placeholder-gray-400"
            />
            <div className="bg-red-400 text-white h-7 w-7 rounded-full text-center cursor-pointer">
              <SearchIcon className="p-1" />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="hidden md:flex-1 sm:flex items-center justify-end space-x-2">
          <div className="hidden md:flex space-x-1 text-gray-500 border-2 border-gray-300 py-1 px-2 rounded-full cursor-pointer hover:bg-gray-200 transition-300">
            <p>Become a host</p>
            <GlobeAltIcon className="w-6 h-6 " />
          </div>
          <div className="flex border-2 border-gray-300 py-1 px-2 rounded-full space-x-2">
            <MenuIcon className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
            <UserIcon className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
        </div>
        {searchInput && (
          <div className=" bg-white p-1 rounded-lg shadow-2xl absolute -bottom-[500px] left-[50%] translate-x-[-50%] flex flex-col">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              rangeColors={["#fd5b61"]}
              minDate={new Date()}
            />
            <div className="flex items-center px-2 border-b border-red-200">
              <h2 className="flex-grow text-xl font-bold">Number of Guests</h2>
              <UserGroupIcon className="h-5" />
              <input
                type="number"
                value={numOfGuests}
                onChange={(e) => setNumOfGuests(e.target.value)}
                min={1}
                max={99}
                className="w-12 pl-3 outline-none text-red-400 font-bold"
              />
            </div>
            <div className="flex justify-evenly my-4">
              <button
                onClick={() => setSearchInput("")}
                className="text-base py-2 px-4 rounded-full border border-red-400 text-red-400 transition-300 active:scale-90"
              >
                Cencel
              </button>
              <button
                onClick={search}
                className="text-base py-2 px-4 rounded-full border border-white text-white bg-red-400 hover:shadow-xl transition-300 active:scale-90"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
