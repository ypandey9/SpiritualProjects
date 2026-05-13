import Navbar from "../components/Navbar";
import VerseCard from "../components/VerseCard";

import ramayanData from "../data/ramayanData";
import kandNames from "../data/kandNames";

import { getBookmarks } from "../utils/bookmarkUtils";

export default function BookmarksPage() {

  const bookmarks = getBookmarks();

  // Build full verse list
  const savedVerses = bookmarks.map((bookmark) => {

    const kand = ramayanData[bookmark.kand];

    const verse = kand?.verses?.find(
      (v) => v.id === bookmark.verseId
    );

    return {
      kandName: kandNames[bookmark.kand],
      kandKey: bookmark.kand,
      ...verse
    };
  });

  return (
    <>
      <Navbar />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-center mb-6 text-secondary">
          📚 Saved Bookmarks
        </h2>

        {savedVerses.length === 0 ? (

          <p className="text-center text-gray-500">
            No bookmarks added yet
          </p>

        ) : (

          savedVerses.map((item, index) => (
            <div key={index} className="mb-8">

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
          ))

        )}

      </div>
    </>
  );
}