import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KandPage from "./pages/KandPage";
import DohaDetail from "./pages/DohaDetail";

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/kand/:name" element={<KandPage />} />
  <Route path="/kand/:name/:id" element={<DohaDetail />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;