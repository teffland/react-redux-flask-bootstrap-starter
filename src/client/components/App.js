import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Row, Col } from 'react-bootstrap'

export default class App extends Component {
  render() {
    console.log('App props', this.props)
    return (
      <div>
        <Header/>
        <div className='container'>
          <Row className="body-container">
            <Col xs={12}>
              {this.props.children}
            </Col>
          </Row>
        </div>
        <div class="push"></div>
        <Footer/>
      </div>
    )
  }
}
