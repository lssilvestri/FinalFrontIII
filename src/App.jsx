import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favs" element={<Favs />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
