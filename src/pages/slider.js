import React from "react"
import { Link } from "gatsby"

import { Slider, Button } from "antd"

import Header from "../components/header"
import "./index.css";
class SliderDemo extends React.Component {
  state = {
    value: "",
  }

  handleSliderChange = value => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    const linkFreedom = `https://save.freedomdebtrelief.com/consolidated?estimated_debt=${value}#/consolidated/estimated_debt`
    return (
      <div className={'slider-container'}>
        <div style={{ color: `teal` }}>
          <Link to="/">Home</Link>
          <Header headerText="Estimate Debt Demo" />
        </div>
        <div className={'slider-component-container'}>
        <Slider
          defaultValue={25000}
          max={80000}
          step={100}
          tooltipVisible
          onChange={this.handleSliderChange}
        />
        </div>
        
        <Button type="danger" href={linkFreedom}>
          Countine
        </Button>
      </div>
    )
  }
}
export default SliderDemo
