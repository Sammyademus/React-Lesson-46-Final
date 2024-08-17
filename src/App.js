//stopped at 1.28hrs



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

//______________________________________________________________________
//BEFORE LESSON 38

// import "./App.css";
// import ParentComponent from "./components/Props/ParentComponent";
// import Counter from "./components/Counter";
//import HandlingEvent from "./components/HandlingEvent";
//import HandlingEventOnChange from "./components/HandlingEventOnChange";
//import HandlingEventOnsubmit from "./components/HandlingEventOnsubmit";
//import ConditionalRendering from "./components/ConditionalRendering";
//import TernaryOperator from "./components/TernaryOperator";
//import TernaryOperatorAssignment from "./components/TernaryOperatorAssignment";
//import ToggleButton from "./components/ToggleMessage";
//import LogicalOperator from "./components/LogicalOperator";
//import Form from "./components/Form";
//import FormClass from "./components/FormClass";
//import List from "./components/List";

// function App() {
//   return (
//     <>
//       {/* <h2>Pr ops</h2>
//       <ParentComponent />
//       <Counter /> */}

//       <h1>Event Handling</h1>

//       {/* <h2>onClick</h2>
//       <HandlingEvent />
//       <h2>onChange</h2>
//       <HandlingEventOnChange />
//       <HandlingEventOnsubmit />
//       <ConditionalRendering />
//       <TernaryOperator /> */}
//       {/* <TernaryOperatorAssignment /> */}
//       {/* <ToggleButton />
//       <LogicalOperator /> */}
//       {/* <Form /> */}
//       {/* <FormClass /> */}
//       {/* <List /> */}
//     </>
//   );
// }

// export default App;

//Note that ChildComponent is displayed in App.js
//The data is passed from ParentComponent to ChildComponent
//___________________________________________________________

//After defining a function, you also have to "export default"

//1/ export default function or
//2/ function
//   export default -(means close a function, already declared)

//___________________________________________________________

//You have to import/render the components created to show it on the browser. By adding "import..."
