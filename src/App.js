import "./App.css";
import Navbar from "./components/navbar/Navbar";
import WeHaveApp from "./components/wehave/WeHave";
import Products from "./components/products/Products";
import OurCustomer from "./components/ourCustomer/OurCustomer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WeHaveApp />
      <Products />
      <OurCustomer />
      <Footer />
    </div>
  );
}

export default App;
