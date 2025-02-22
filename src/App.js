import "./main.css";
import Hero from "./components/Hero";
import Header from "./components/layout/Header";
import Partners from "./components/Partners";
import Communication from "./components/Communication";
import Analyze from "./components/Analyze";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Partners />
      <Communication/>
      <Analyze/>
      <Team/>
    </>
  );
}
export default App;
