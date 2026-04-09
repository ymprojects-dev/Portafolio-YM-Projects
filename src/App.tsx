import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impostore from "./pages/Impostore";

import ImpostoreTerminos from "./pages/ImpostoreTerminos";
import ImpostorePrivacidad from "./pages/ImpostorePrivacidad";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impostore" element={<Impostore />} />
        <Route path="/impostore/terminos" element={<ImpostoreTerminos />} />
        <Route path="/impostore/privacidad" element={<ImpostorePrivacidad />} />
        {/* Placeholder for other routes */}
        <Route path="/barrasfinder" element={<Home />} />
        <Route path="/dados" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
