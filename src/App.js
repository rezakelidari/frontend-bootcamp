import React from "react";

import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Methods from "./components/Methods";
import Learn from "./components/Learn";
import Instructurs from "./components/Instructors";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Newsletter />
      <Methods />
      <Learn />
      <Instructurs />
      <FAQ />
    </>
  );
}

export default App;
