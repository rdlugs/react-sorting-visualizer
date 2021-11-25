import React from 'react'
import { Navbar, Container, Image, Form } from 'react-bootstrap'

export default class Header extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            theme : false
        }
    }

    componentDidMount(){
        this.setState({ theme : this.getTheme() })
    }

    setTheme(theme){
        localStorage.setItem("theme", theme)
        this.setState({ theme: theme })
    }

    getTheme(){
        return (localStorage.getItem("theme") === "true") ? true : false 
    }

    render() {
        return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image 
                        src="./logo.png" 
                        alt="" 
                        width="30" 
                        roundedCircle
                        style={{ marginRight:"10px" }}/>
                    Sorting Visualizer
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {/* <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            defaultChecked={this.getTheme()}
                            onChange={e => this.setTheme(e.target.checked)}
                        />
                    </Form>
                    <span className="dark-light">
                        <Image src={ this.getTheme() ? "./moon.png" : "./sun.png" } />
                    </span> */}
                    <Navbar.Text>
                        <a 
                            href="https://github.com/rdlugs" 
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

