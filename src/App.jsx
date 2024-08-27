import "./App.css";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import Meals from "./components/meals/Meals";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Meals />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
