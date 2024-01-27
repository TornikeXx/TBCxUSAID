import Navbar from "./components/Navbar/Navbar";
import About from "./components/sections/About/About";
import Courses from "./components/sections/Courses/Courses";
import Partners from "./components/sections/Partners/Partners";
import Questions from "./components/sections/FAQ/FAQ";
import Footer from "./components/sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Courses />
      <Partners />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
