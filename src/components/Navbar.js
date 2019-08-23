import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      }
    )
  }

  render() {
    return (
      <header className="header">
        <nav
          className="navbar"
          role="navigation"
          aria-label="main-navigation"
        >
          <div
            className={`navbar__burger ${this.state.active ? "navbar__burger--opened" : ""}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>

          <ul
            id="navMenu"
            className={`navbar__menu ${this.state.active ? "navbar__menu--opened" : ""}`}
          >
            <li className="navbar__menuItem">
              <Link className="navbar__menuItemLink" to="/a-propos">
                A propos
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link className="navbar__menuItemLink" to="/services">
                Services
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link className="navbar__menuItemLink" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link className="navbar__menuItemLink" to="/blog">
                Blog
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link className="navbar__menuItemLink" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar
