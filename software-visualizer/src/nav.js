//import {React, useState} from "react";
import styles from "./nav.css"
//import { Navbar, Container, Nav  } from "reactstrap";
//import { Link } from "react-router-dom";
//import LinkContainer from "react-router-bootstrap/LinkContainer"
const Header = () => {
    return (
        <div class='container'>
          <nav>
            <ul>
              <li>Header</li>
              <li>Generate New Array</li>
              <li>
                <div class='adjuster'>
                  adjuster
                </div>
              </li>
              <li>
                <ul>
                  <li>Merge Sort</li>
                  <li>Quick Sort</li>
                  <li>Heap Sort</li>
                  <li>Bubble Sort</li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
    )
};

export default Header;