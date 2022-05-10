import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import Testimonia from "./Components/Testimonial/Testimonia";
import Value from "./Components/Values/values";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Value />
      <Service />
      <Testimonia />
      <Contact />
    </div>
  );
}

export default App;
