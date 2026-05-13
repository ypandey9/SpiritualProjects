import { useState } from "react";

import Navbar from "../components/Navbar";
import VerseCard from "../components/VerseCard";

import ramayanData from "../data/ramayanData";
import kandNames from "../data/kandNames";

export default function SearchPage() {

  const [query, setQuery] = useState("");

  // Flatten all kand verses
  const allVerses = Object.entries(ramayanData).flatMap(
    ([kandKey, kandData]) =>

      kandData.verses.map((verse) => ({
        ...verse,
        kandKey,
        kandName: kandNames[kandKey]
      }))
  );

  // Filter results
  const filteredVerses = allVerses.filter((verse) => {

  const searchText = `
  ${
    Array.isArray(verse.text)
      ? verse.text.join(" ")
      : verse.text
  }

  ${
    verse.transliteration?.join(" ") || ""
  }

  ${verse.arth}

  ${verse.english || ""}
`.toLowerCase();

    return searchText.includes(query.toLowerCase());
  });

  return (
    <>
      <Navbar />

      <div className="p-6">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6 text-secondary">
          🔍 Search Verses
        </h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Doha, Chaupai, Arth..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full p-3 rounded-xl border
            border-orange-200 mb-6
            focus:outline-none focus:ring-2
            focus:ring-orange-300
          "
        />

        {/* Results */}
        {query && filteredVerses.length === 0 && (
          <p className="text-center text-gray-500">
            No results found
          </p>
        )}

        {filteredVerses.map((item) => (
          <div key={`${item.kandKey}-${item.id}`} className="mb-8">

            {/* Kand Name */}
            <h3 className="text-lg font-semibold mb-3 text-orange-600">
              {item.kandName}
            </h3>

            <VerseCard
              id={item.id}
              type={item.type}
              text={item.text}
              arth={item.arth}
              english={item.english}
            />

          </div>
        ))}

      </div>
    </>
  );
}