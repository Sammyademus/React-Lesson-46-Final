// import "./App.css";
// import ParentComponent from "./components/Props/ParentComponent";
// import Counter from "./components/Counter";
import HandlingEvent from "./components/HandlingEvent";
import HandlingEventOnChange from "./components/HandlingEventOnChange";
import HandlingEventOnsubmit from "./components/HandlingEventOnsubmit";

function App() {
  return (
    <>
      {/* <h2>Pr ops</h2>
      <ParentComponent />
      <Counter /> */}

      <h1>Event Handling</h1>

      <h2>onClick</h2>
      <HandlingEvent />

      <h2>onChange</h2>
      <HandlingEventOnChange />
      <HandlingEventOnsubmit />
    </>
  );
}

export default App;

//Note that ChildComponent is displayed in App.js
//The data is passed from ParentComponent to ChildComponent
//___________________________________________________________

//After defining a function, you also have to "export default"

//1/ export default function or
//2/ function
//   export default -(means close a function, already declared)

//___________________________________________________________

//You have to import/render the components created to show it on the browser. By adding "import..."
