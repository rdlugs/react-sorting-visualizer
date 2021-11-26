import React from 'react'
import { Navbar, Container, Image } from 'react-bootstrap'

export default class Header extends React.Component {


    render() {
        return (
        <Navbar bg="dark" variant="dark" sticky="top" id="header">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image 
                        src={process.env.PUBLIC_URL +'/logo.png'} 
                        alt="asd" 
                        width="30" 
                        roundedCircle
                        style={{ marginRight:"10px" }}/>
                    Sorting Visualizer
                </Navbar.Brand>
                
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a 
                            href="https://github.com/rdlugs/react-sorting-visualizer" 
                            rel="noopener noreferrer" 
                            target="_blank"
                            className="githubLink">github.com/rdlugs</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }
}

