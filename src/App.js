import { useState, useEffect } from "react";
import About from "./components/About";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Info from "./components/Info";
import { BackContextProvider } from "./context/backs/Back";
import "./css/index.css";
import BackModel from "./components/BackModel";
import ThanksModel from "./components/ThanksModel";

function App() {
  const [backModelOpen, setBackModelOpen] = useState(false);
  const [thankModelOpen, setThankModelOpen] = useState(false);

  useEffect(() => {
    if (backModelOpen || thankModelOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [backModelOpen, thankModelOpen]);

  return (
    <>
      <BackContextProvider>
        <Header />
        <main>
          <CTA setModelOpen={setBackModelOpen} />
          <Info />
          <About />
        </main>
        {backModelOpen && (
          <BackModel
            setModelOpen={setBackModelOpen}
            setThankModelOpen={setThankModelOpen}
          />
        )}
        {thankModelOpen && (
          <ThanksModel setThankModelOpen={setThankModelOpen} />
        )}
      </BackContextProvider>
    </>
  );
}

export default App;
