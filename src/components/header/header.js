import { Link } from "gatsby";
import * as React from "react"
import "./header.scss"
import Picture from "../picture/Picture";
import Bg from "../../images/backgrounds/stripe web@2x.png";
import BgMobile from "../../images/backgrounds/stripe_movbile@2x.png";

const headerItems = [
  { icon: `./icon_4.svg`, text: "Secure & tested" },
  { icon: "./icon_5.svg", text: "Easy withdrawals" },
  { icon: "./icon_6.svg", text: "All sites are licensed" }
];

const Header = (props) => (
  <header className="header has-img-fit">
    <Picture className="img-bg has-img-fit" data={{"default": Bg, "768px": BgMobile}} text="Best Casin Guide 2022"/>
    <div className="vw-container">
      <nav>
        <ul className="header-menu list-style-reset">
          {headerItems.map(({ text, icon }, index) => {
            return (
              <li className="header-menu-item" key={index}>
                <Link to="/" className="header-link">
                  <img className="header-link-icon" width={16} height={16} src={icon} alt={text} />
                  <span>{text}</span>
                </Link>
              </li>)
          })}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header