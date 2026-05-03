import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import VerseCard from "../components/VerseCard";
import ramayanData from "../data/ramayanData";
import kandNames from "../data/kandNames";

export default function KandPage() {
  const { name } = useParams();

const kand = ramayanData[name] || {};
const verses = kand.verses || [];
const header = kand.header || {};

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
          verses.map((item) => (
            <VerseCard key={item.id} type={item.type} text={item.text} arth={item.arth} english={item.english} />
          ))
        )}

      </div>
    </>
  );
}