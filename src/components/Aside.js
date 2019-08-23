import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faBehance } from "@fortawesome/fontawesome-free-brands";


const Aside = class extends React.Component {

  render() {
    return (
      <aside className="aside">
        <nav
          className="aside__nav"
        >
          <ul
            className="aside__menu"
          >
            <li className="aside__menuItem">
              <a className="aside__menuItemLink" href="https://twitter.com/LailatiD">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="aside__menuItem">
              <a className="aside__menuItemLink" href="https://fr.linkedin.com/in/lailati-dimassi-66b324176">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="aside__menuItem">
              <a className="aside__menuItemLink" href="https://www.behance.net/lailatidima79a">
                <FontAwesomeIcon icon={faBehance} />
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Aside
