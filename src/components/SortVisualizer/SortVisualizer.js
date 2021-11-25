import React, { Component } from 'react'
import BarOptions from '../Includes/BarOptions'
import Bars from '../Includes/Bars'
import { Container, Row } from 'react-bootstrap'

export default class SortVisualizer extends Component {
    

    render() {
        return (
            <div className="main-app">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Bars />
                        <BarOptions />
                    </Row>
                </Container>
            </div>
        )
    }
}
