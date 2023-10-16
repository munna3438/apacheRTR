import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Review from "./components/Review/Review";
import Dashboard from "./components/Dashboard/Dashboard";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contect from "./components/Contect/Contect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
