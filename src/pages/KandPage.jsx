import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import VerseCard from "../components/VerseCard";
import ramayanData from "../data/ramayanData";
import kandNames from "../data/kandNames";
import { useState } from "react";
import { useEffect } from "react";

export default function KandPage() {

 const { name } = useParams();

const kand = ramayanData[name] || {};
const verses = kand.verses || [];
const header = kand.header || {};


  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex=(currentPage-1)*itemsPerPage;
  const endIndex=startIndex+itemsPerPage;

  const currentVerses=verses.slice(startIndex,endIndex);
  const totalPages=Math.ceil(verses.length/itemsPerPage);

  useEffect(() => {
  setCurrentPage(1);
}, [name]);

useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage]);

  return (
    <>
      <Navbar />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
          {kandNames[name] || name}
        </h2>

        <div className="text-center mb-8 space-y-2">

  {header.lines?.map((line, index) => (
    <p 
      key={index}
      className={`${
        index === 2 
          ? "text-2xl font-bold text-secondary" 
          : "text-lg text-gray-700"
      }`}
    >
      {line}
    </p>
  ))}

</div>

        {verses.length === 0 ? (
          <p className="text-center text-gray-500">
            No data available
          </p>
        ) : (
          currentVerses.map((item) => (
            <VerseCard key={item.id} id={item.id} type={item.type} text={item.text} arth={item.arth} english={item.english} />
          ))
        )}

    <div className="flex justify-center gap-2 mt-6">

  {/* Previous */}
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    className="px-3 py-1 bg-orange-200 rounded"
  >
    Prev
  </button>

  {/* Page Numbers */}
  {[...Array(totalPages)].map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`px-3 py-1 rounded ${
        currentPage === index + 1
          ? "bg-orange-500 text-white"
          : "bg-gray-200"
      }`}
    >
      {index + 1}
    </button>
  ))}

  {/* Next */}
  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    className="px-3 py-1 bg-orange-200 rounded"
  >
    Next
  </button>

</div>
    

      </div>


    </>
  );
}