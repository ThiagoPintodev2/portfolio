import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import Resume from "./components/pages/Resume";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import  Home  from "./components/pages/Home";

function App() {
  return (
    <div className={`bg-bgdark h-[100%]`}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
