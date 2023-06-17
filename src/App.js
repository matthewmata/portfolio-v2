import { useState } from "react";

import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const toggleSideNavBar = () => {
    setHamburgerActive((prevState) => !prevState)
  }

  return (
    <>
      <Header
        toggleSideNavBar={toggleSideNavBar}
        hamburgerActive={hamburgerActive}
      />
      {hamburgerActive ? (
        <SideNav setHamburgerActive={setHamburgerActive} />
      ) : (
        ""
      )}
      <About />
      <Work />
      <Footer />
    </>
  );
};

export default App;
