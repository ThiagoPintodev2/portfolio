import "./App.css";
import Header from "./components/Header/";
import Main from "./components/Main";
import { Routes, Route } from "react-router";
import Resume from "./components/pages/Resume";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className={`bg-bgdark h-[100%]`}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Main />
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
