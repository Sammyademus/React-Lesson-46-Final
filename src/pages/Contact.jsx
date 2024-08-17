import React from "react";
import { Link } from "react-router-dom";
import AxiosDataUser from "../components/api/AxiosDataUser";


export default function Contact() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>

      <h2>This is the Contact us page</h2>
      <AxiosDataUser />
    </div>
  );
}
