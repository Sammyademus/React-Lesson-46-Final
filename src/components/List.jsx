import React from "react";

export default function List() {
  //const items = ["Apple", "Banana", "Orange", "Grapes"];

  // const items = [
  //   { id: "1", Type: "Apple" }, 
  //   { id: "2", Type: "Banana" },
  //   { id: "3", Type: "Orange" },
  //   { id: "4", Type: "Grapes" },
  // ];

    const moneyTransactions = [
      {
        id: "1",
        details: "Payment to Supplier X",
        amount: "N600.00",
        date: "2024-08-01",
      },
      {
        id: "2",
        details: "Payment to Supplier A",
        amount: "N4000.00",
        date: "2024-08-04",
      },
      {
        id: "3",
        details: "Payment to Supplier B",
        amount: "N200.00",
        date: "2024-08-08",
      },
      {
        id: "4",
        details: "Payment to Supplier C",
        amount: "N100.00",
        date: "2024-08-21",
      },
      {
        id: "5",
        details: "Payment to Supplier F",
        amount: "N60.00",
        date: "2023-08-01",
      },
      {
        id: "6",
        details: "Payment to Supplier G",
        amount: "N2600.00",
        date: "2024-07-01",
      },
    ];

  return (
    // <>
    //   <ul>
    //     {items.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>
    // </>

    // <>
    //   <ul>
    //     {items.map((item) => (
    //       <li key={item.id}>
    //         <p>{item.Type}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </>

    <>
      <ul>
        {moneyTransactions.map((trans) => (
          <li key={trans.id}>
            <p>id: {trans.id}</p>
            <p>Details: {trans.details}</p>
            <p>Amount: {trans.amount}</p> 
            <p>Date: {trans.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

//What is List
// A list refers to an array or iterable collection of elements that you want to render dynamically within your components.

//Rendering a list in REACT involves mapping over an array and creating react elements for react item in the array

//Javascript function used is: map() method
