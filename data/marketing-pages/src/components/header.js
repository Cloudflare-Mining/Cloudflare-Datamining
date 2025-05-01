import React from "react"
import Nav from "./nav"

const Header = ({ showInput = true }) => (
  <header className="Header">
    <Nav showInput={showInput} />
  </header>
)

export default Header
