import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="bg-primary text-white p-4 shadow-md flex justify-center">
      <h1 className="text-2xl font-bold tracking-wide">
        📜 श्री रामचरितमानस
      </h1>

      <div className="flex gap-10 ml-10">

    <Link to="/search">
  Search
</Link>

  <Link to="/">
    Home
  </Link>

  <Link to="/bookmarks">
    Bookmarks
  </Link>

</div>

    </div>
  );
}