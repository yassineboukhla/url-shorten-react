import "./App.css";
import Header from "./Components/Header/Header";
import Slide from "./Components/Slide/Slide";
import Shortener from "./Components/Shortener/Shortener";
import Statistics from "./Components/Statistics/Statistics";
import Booster from "./Components/Booster/Booster";
import Footer from "./Components/Footer/Footer";
import Link from "./Components/Link/Link";
function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Shortener />
      <Statistics />
      <Booster />
      <Footer />
    </div>
  );
}

export default App;
