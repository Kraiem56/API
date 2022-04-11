import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Navbarr from './Components/Navbarr';
import Episodes from './Components/containers/Episodes';
import Characters from './Components/containers/Characters';
import Quotes from './Components/containers/Quotes';




const App = () => {

  return (
    <Router>
      
      <Navbarr />
      <section className="container">
        <Routes>
          <Route path="/" element={<Characters/>}  />
          <Route path="/episodes" element={<Episodes/>}  />
          <Route path="/quotes" element={<Quotes/>}  />
        </Routes>
      </section>
    </Router>
  );
};
export default App;
