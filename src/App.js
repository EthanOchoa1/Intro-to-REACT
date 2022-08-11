import { useState } from "react";
import CounterComp from "./Components/Counter";
import CompWithFreagment from "./Components/WithFragments";
import SuperSimpleComp from "./Components/simple"
import ColorComp from "./Components/color";
import "./App.css";

function App() {
  return (
    <>
    <ColorComp />
    <CounterComp />
    <CompWithFreagment />
    <SuperSimpleComp />
    
    
    
    </>
  )

}

export default App;
