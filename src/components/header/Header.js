import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

import React from 'react'


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": 'gold'}}>
                <FontAwesomeIcon icon={faVideoSlash}/>Gold
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '80px'}}
                    navbarScroll>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/WatchList">Watch List</NavLink>
                </Nav>

                <Button variant="outline-info" className="me-2">Login</Button>
                <Button variant="outline-info">Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header

/*
<Navbar bg="dark" variant="dark" expand="lg"> :在 expand="lg" 中，lg 表示当屏幕宽度达到或超过 992px 时，导航栏将会展开为完整显示的模式。

Nav：在 Navbar 内，Nav 被默认设置为 flex 布局。Nav 通过使用 me-auto（即 margin-end: auto，在 Bootstrap 中，me-auto 是 margin-right: auto 的缩写）来将其内容推到左边。这是实现 NavLink 在左边的关键。
Button：Button 组件默认在 Navbar 中以 flex 布局展示。Button 直接放在 Navbar.Collapse 里，并通过 ms-2（即 margin-start: 2）等类来调整位置。因为 Nav 使用了 me-auto，所以 Button 会被推到右侧。

my-2 是 “margin-y” 的缩写，表示上下外边距（即 margin-top 和 margin-bottom）。值 2 是 Bootstrap 中的一个单位，表示一个相对较小的间距，通常是 0.5rem。
这就设置了 Nav 上下的间距。
my-lg-0 也是 “margin-y” 的缩写，但是它只会在大屏幕及以上的设备（lg 屏幕尺寸）上生效。在大屏幕上，它将会把上下外边距设置为 0（即移除上下的间距）。

<Button variant="outline-info" className="me-2">Login</Button> "me-2"是设置margin-end的边距也就是右边距为2；
*/

// 一般格式：
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         {/* Logo or Brand name */
//         <Navbar.Brand href="/">MyApp</Navbar.Brand>
        
//         {/* Toggle button, appears on smaller screens */}
//         <Navbar.Toggle aria-controls="navbarScroll" />

//         {/* Collapsible content that can be shown or hidden */}
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


