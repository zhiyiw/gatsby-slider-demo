import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "antd/dist/antd.css";
import "./index.css";
export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Link to="/slider/">Slider Demo page</Link>
    <Header headerText="Hello Gatsby! from header" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)