import { useEffect, useState } from "react";

import Home from "@/components/Home/Home";
import Navbar from "@/components/NavBar/Navbar";
import { SelectedPage } from "@/shared/types";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isAtPageTop, setIsAtPageTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
        setIsAtPageTop(true);
      } else {
        setIsAtPageTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isAtPageTop={isAtPageTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
    </div>);
}

export default App;
