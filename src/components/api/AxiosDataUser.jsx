import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosDataUser() {
  const [getPost, setGetPost] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => setGetPost(response.data));

    //console.log(response.data, "response"));

    //FOR CONSOLE.LOG
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")

    //   .then(
    //     (response) =>
    //       //using response
    //       console.log(response, "response")
    //     //using result
    //     //console.log(result.data, "response")
    //     //setGetPost(response.data))
    //   );
  }, []);

  return (
    <>
      <h2>Data from Axios User</h2>

      <ul>
        {getPost?.map((item) => (
          <li key={item.id}>
            <h3> {item.name}</h3>
            <p>{item.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
