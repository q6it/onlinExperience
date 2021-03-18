import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"

import Logo from "../images/logo_white.png"
import { Button } from "./styles/Button"
import { styleVariables } from "./styles/variables"

const Nav = styled.nav`
  background: transparent;
  height: ${styleVariables.navHeight};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 4);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Image = styled.img`
  /* height: 200px; */
  height: ${styleVariables.navHeight};
  width: 300px;
  position: absolute;
  top: 0;

  @media screen and (max-width: 830px) {
    height: 90px;
    width: 130px;
    /* display: none; */
  }
`

const Header = ({ siteTitle }) => {
  return (
    <Nav>
      <NavLink to="/">
        {/* OnlinExperience */}
        <Image src={Logo} alt="test" />
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, i) => (
          <NavLink to={item.link} key={i}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        {/* <Button primary="true" round="true" to="/tour_tallinn">
          Take A Tour
        </Button> */}
      </NavBtn>
    </Nav>
  )
}
// <header
//   style={{
//     background: `rebeccapurple`,
//     marginBottom: `1.45rem`,
//   }}
// >
//   <div
//     style={{
//       margin: `0 auto`,
//       maxWidth: 960,
//       padding: `1.45rem 1.0875rem`,
//     }}
//   >
//     <h1 style={{ margin: 0 }}>
//       <Link
//         to="/"
//         style={{
//           color: `white`,
//           textDecoration: `none`,
//         }}
//       >
//         {siteTitle}
//       </Link>
//     </h1>
//   </div>
// </header>

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
