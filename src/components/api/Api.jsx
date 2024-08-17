import React, { useState, useEffect } from "react";

export default function Api() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    //fetch data using fetch  API

    fetch("https://jsonplaceholder.typicode.com/posts") //making a get request from an api or endpoint
      .then((response) => response.json()) //response is converted to json file format
      .then((data) => setPosts(data));

    // fetch("https://jsonplaceholder.typicode.com/posts") //making a get request from an api or endpoint
    //   .then((response) => {
    //     console.log(response, "response");
    //     response.json();
    //   }) //response is converted to json file format

    //   .then((data) => {
    //     console.log(data, "data");
    //     setPosts(data);
    //   });

    //.catch((error) => console.error("API error", error));
  }, []);

  return (
    <>
      <div>
        <h2>Posts from free API</h2>

        <ol>
          {posts?.map(
            (
              item // the question mark will check if the data is an array (conditional check)
            ) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.title}</p>
              </li>
            )
          )}
        </ol>
      </div>
    </>
  );
}

//API - Application Programming Interface

// APs are sets of rules that define hoe different software applications can communicate or interact with each other.
//Define methods, data formats that apps can use to request and exchange info

//RESTful APIs involves fetching data from endpoints (urls) and handles the response they provides

//API Types - Requires authentication
//https://openweathermap.org/api
//https://jsonplaceholder.typicode.com/ and https://jsonplaceholder.typicode.com/posts
//https://www.thedogapi.com/
//https://sv443.net/jokeapi/v2/

//you can make use of different api to learn and practice

//HOW DO WE IMPLEMENT API
//METHODS - fetch() or axios
//fetch is a built in browser api that allows us to make http request
//https://jsonplaceholder.typicode.com/posts

//{useEffect} hook is a built-in react hook that allows us to perform side effects with our components. It takes 2 arguments:
//   callback function that contains the side effect code and
//   dependency array that tells the react when to run the effect
