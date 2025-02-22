import "./main.css";
import Hero from "./components/Hero";
import Header from "./components/layout/Header";
import Partners from "./components/Partners";
import Communication from "./components/Communication";
import Analyze from "./components/Analyze";
import Team from "./components/Team";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Partners />
      <Communication/>
      <Analyze/>
      <Team/>
      <Footer/>
    </>
  );
}
export default App;
