import React, { useState } from "react";

export default function LogicalOperator() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>This message is conditionally rendered</p>}
    </div>
  );
}
