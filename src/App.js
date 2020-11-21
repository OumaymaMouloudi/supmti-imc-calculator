import React from "react";
import './App.css';
import ImcCard from "./components/IMCCard";

function App() {
  return (
    <div className="App">
      <div className='container'>
          <div className="row mt-5">
              <div className="col">
                  <ImcCard/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
