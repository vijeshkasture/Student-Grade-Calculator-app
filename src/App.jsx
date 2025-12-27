// import { useState } from 'react'
// import Navbar from './navbar'
// import Hero from './hero'
// import Features from './features'
// import Calculator from './calculator'
// import About from './about'
// function App() {

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Features />
//       <Calculator />
//       <About />
//     </>
//   );

// }

// export default App



import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./navbar";
import Hero from "./hero";
import Features from "./features";
import Calculator from "./calculator";
import About from "./about";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Calculator />
      
    </>
  );
}

function App() {
  const location = useLocation();

  // Navbar should NOT appear on About page
  const hideNavbar = location.pathname === "/about";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;