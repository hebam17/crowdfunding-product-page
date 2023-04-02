import { useState, useEffect } from "react";
import About from "./components/About";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Info from "./components/Info";
import { BackContextProvider } from "./context/backs/Back";
import "./css/index.css";

function App() {
  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    console.log(modelOpen);
  }, [modelOpen]);

  return (
    <>
      <BackContextProvider>
        <Header />
        <main>
          <CTA setModelOpen={setModelOpen} />
          <Info />
          <About />
        </main>
      </BackContextProvider>
    </>
  );
}

export default App;
