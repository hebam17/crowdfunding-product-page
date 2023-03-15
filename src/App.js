import About from "./components/About";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Info from "./components/Info";
import "./css/index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <CTA />
        {/* <Info />
        <About /> */}
      </main>
    </>
  );
}

export default App;
