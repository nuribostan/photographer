import NavBar from "./components/NavBar";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./page/Works";
import About from "./page/About";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="work" element={<Works />}/>
          <Route path= "about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
