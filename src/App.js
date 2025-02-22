import "./main.css";
import Hero from "./components/Hero";
import Header from "./components/layout/Header";
import Partners from "./components/Partners";
import Communication from "./components/Communication";
import Analyze from "./components/Analyze";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Partners />
      <Communication/>
      <Analyze/>
    </>
  );
}
export default App;
