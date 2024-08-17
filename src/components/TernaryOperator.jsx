// checks if it is true or false

import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

export default function TernaryOperator() {
  const [isLoggedIn, setIsLoggedIn] = useState(FOCUSABLE_SELECTOR);

  return (
    <div>
      {isLoggedIn ? <p>Welcome Back</p> : <p>Please log in</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
