import React from "react";

//Option 1
// export default function ChildComponent(props) {
//   return (
//     <div>
//       <h1>Hello, the username is {props.name} </h1>
//       <p>The gender is {props.gender}</p>
//       <p>The age is {props.age}</p>
//     </div>
//   );
// }

// ____________________________________

// //Option 2
export default function ChildComponent(props) {
  return (
    <div>
      <h1>The message is {props.message} </h1>
      <p>The username is {props.username}</p>
      <p>The gender is {props.gender}</p>
    </div>
  );
}
