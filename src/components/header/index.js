import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import HeaderLogo from "./headerLogo"


const Header = ({ menuLinks }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const menuToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__wrapper">
          <div className={`site-header__logo ${
            isExpanded ? "menu-expanded" : ""
          }`} >
            <HeaderLogo/>
          </div>

          <div className="site-header__navigation">

            <button className={`site-header__navigation-button ${
                       isExpanded ? "is-expanded" : ""
                     }`}
                     aria-label="navigation button" onClick={() => menuToggle()}>
              <span className="bar bar--one">Bar 1</span>
              <span className="bar bar--two">Bar 2</span>
              <span className="bar bar--three">bar 3</span>
            </button>
            <nav
              id="mainNavigation"
              className={`site-navigation ${
                isExpanded ? "is-expanded" : ""
              }`}
            >
              <ul className="menu">
                {menuLinks.map(link => (
                  <li key={link.name} className="menu__item">
                    <Link
                      to={link.link}
                      className="menu__link"
                      aria-label={link.name}
                      activeClassName="active"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
