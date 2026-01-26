import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Index";
import Main from "./components/Main";

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
        <Route
          path="/resume"
          element={
            <div>
              <Header />
              <Main />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
