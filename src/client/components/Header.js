import React, { Component } from 'react'
import { Link } from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    const brand = "React Redux Flask Starter"
    const links = [
      { to:'/', text:"Home" },
      { to:'/edit', text:"Other View" },
    ]
    return (
      <header>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React Redux Flask Starter</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {links.map((link, i) => {
                if (!i) {
                  return (
                    <IndexLinkContainer key={`link-${i}`} to={link.to}>
                      <NavItem>{link.text}</NavItem>
                    </IndexLinkContainer>
                  )
                }
                else {
                  return (
                  <LinkContainer key={`link-${i}`} to={link.to}>
                    <NavItem>{link.text}</NavItem>
                  </LinkContainer>
                  )
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
