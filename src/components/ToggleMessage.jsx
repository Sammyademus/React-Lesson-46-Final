import React, { useState } from "react";

export default function ToggleMessage() {
  // Initialize a boolean state variable
  const [showMessage, setShowMessage] = useState(true);

  // Toggle the state when the button is clicked
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      {/* Display different messages based on the state */}
      {showMessage ? <p>Hello, Welcome!</p> : <p>Goodbye, See you soon!</p>}

      {/* Toggle button */}
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
}

// const ToggleMessage = () => {
//   // Initialize a boolean state variable
//   const [showMessage, setShowMessage] = useState(true);

//   // Toggle the state when the button is clicked
//   const toggleMessage = () => {
//     setShowMessage(!showMessage);
//   };

//   return (
//     <div>
//       {/* Display different messages based on the state */}
//       {showMessage ? <p>Hello, Welcome!</p> : <p>Goodbye, See you soon!</p>}

//       {/* Toggle button */}
//       <button onClick={toggleMessage}>Toggle Message</button>
//     </div>
//   );
// };

// export default ToggleMessage;