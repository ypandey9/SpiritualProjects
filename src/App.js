import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KandPage from "./pages/KandPage";
import DohaDetail from "./pages/DohaDetail";
import BookmarksPage from "./pages/BookmarksPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/kand/:name" element={<KandPage />} />
  <Route path="/kand/:name/:id" element={<DohaDetail />} />
  <Route path="/bookmarks" element={<BookmarksPage />} />
  <Route path="/search" element={<SearchPage />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;