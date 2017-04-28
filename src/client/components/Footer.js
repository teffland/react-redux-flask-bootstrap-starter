import React, { Component } from 'react'
import { Link } from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Row, Col } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    const brand = "React Redux Flask Starter"
    const links = [
      { to:'/', text:"Home" },
      { to:'/edit', text:"Edit" },
    ]
    return (
      <footer>
        <Row>
          <Col xs={12}>
            <div className="footer-text">
              Made with ♥, Tom Effland 2017
            </div>
          </Col>
        </Row>
      </footer>
    )
  }
}
