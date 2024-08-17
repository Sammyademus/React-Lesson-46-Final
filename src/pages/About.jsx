import React from "react";
import { Link } from "react-router-dom";
import AxiosData from "../components/api/AxiosData";

export default function About() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <h2>This is the About us page</h2>
      <AxiosData />
    </div>
  );
}
