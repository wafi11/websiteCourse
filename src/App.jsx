import React from "react";
import { Routes, Route } from "react-router-dom";
import homePage from "./pages/homePage";
import Kelas from "./pages/Kelas";
import faqPage from "./pages/faqPage";
import syaratKetenPages from "./pages/syaratKetenPages";
import testimonialPages from "./pages/testimonialPages";
import NavbarComponent from "./components/navbarComponent";
import FooterComponent from "./components/footerComponent";
import Faqcomponent from "./components/faqcomponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={homePage} />
        <Route path="/kelas" Component={Kelas} />
        <Route path="/testimonial" Component={testimonialPages} />
        <Route path="/faq" Component={faqPage} />
        <Route path="/syaratketen" Component={syaratKetenPages} />
      </Routes>
      <Faqcomponent />
      <FooterComponent />
    </div>
  );
}

export default App;
