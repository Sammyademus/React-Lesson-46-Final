// Ternary Operation - checks if it is true or false

import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

export default function TernaryOperatorAssignment() {
  const [ToggleMessage, SetToggleMessage] = useState(FOCUSABLE_SELECTOR);

  return (
    <div>
      {ToggleMessage ? <p>Hello, Welcome!</p> : <p>Goodbye, See you soon!</p>}

      <button onClick={() => SetToggleMessage(!ToggleMessage)}>
        {ToggleMessage ? "Logout" : "Login"}
      </button>
    </div>
  );
}
