import React from "react";

import TopNavbar from "./components/TopNavbar/index";
import Header from "./components/Header/index";
import Newsletter from "./components/Newsletter/index";
import Methods from "./components/Methods/index";
import Learn from "./components/Learn";
import Instructurs from "./components/Instructors";

function App() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Newsletter />
      <Methods />
      <Learn />
      <Instructurs />
    </>
  );
}

export default App;
