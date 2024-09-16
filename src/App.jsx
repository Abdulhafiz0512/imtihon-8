import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Header from "./components/Header";
import { useState } from "react";
import SingleCountry from "./pages/SingleCountry";
import LineChartWithFilters from "./components/LineChart";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Router>
        <Header setIsOpen={setIsOpen} />
        <Routes>
          <Route
            path='/'
            element={<Countries isOpen={isOpen} setIsOpen={setIsOpen} />}
          />
          <Route path='/countries/:id' Component={SingleCountry}/>
          <Route path="/countries/chart" Component={LineChartWithFilters}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
