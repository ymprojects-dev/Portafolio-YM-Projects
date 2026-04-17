import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Impostore from "./pages/impostore/Impostore";
import ImpostoreTerminos from "./pages/impostore/ImpostoreTerminos";
import ImpostorePrivacidad from "./pages/impostore/ImpostorePrivacidad";

import Sbarra from "./pages/sbarra/Sbarra";
import SbarraDeleteAccount from "./pages/sbarra/SbarraDeleteAccount";
import SbarraPrivacidad from "./pages/sbarra/SbarraPrivacidad";
import SbarraTerminos from "./pages/sbarra/SbarraTerminos";

import Fortuna from "./pages/fortuna/Fortuna";
import FortunaPrivacidad from "./pages/fortuna/FortunaPrivacidad";
import FortunaTerminos from "./pages/fortuna/FortunaTerminos";

import Diviso from "./pages/diviso/Diviso";
import DivisoPrivacidad from "./pages/diviso/DivisoPrivacidad";
import DivisoTerminos from "./pages/diviso/DivisoTerminos";
import DivisoDeleteAccount from "./pages/diviso/DivisoDeleteAccount";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Impostore */}
        <Route path="/impostore" element={<Impostore />} />
        <Route path="/impostore/terminos" element={<ImpostoreTerminos />} />
        <Route path="/impostore/privacidad" element={<ImpostorePrivacidad />} />
        {/* Sbarra */}
        <Route path="/sbarra" element={<Sbarra />} />
        <Route path="/sbarra/terminos" element={<SbarraTerminos />} />
        <Route path="/sbarra/delete-account" element={<SbarraDeleteAccount />} />
        <Route path="/sbarra/privacidad" element={<SbarraPrivacidad />} />
        {/* Fortuna */}
        <Route path="/fortuna" element={<Fortuna />} />
        <Route path="/fortuna/terminos" element={<FortunaTerminos />} />
        <Route path="/fortuna/privacidad" element={<FortunaPrivacidad />} />
        {/* Diviso */}
        <Route path="/diviso" element={<Diviso />} />
        <Route path="/diviso/terminos" element={<DivisoTerminos />} />
        <Route path="/diviso/privacidad" element={<DivisoPrivacidad />} />
        <Route path="/diviso/delete-account" element={<DivisoDeleteAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
