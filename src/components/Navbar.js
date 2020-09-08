import React, {Component} from "react";
import { animateScroll as scroll } from "react-scroll";
import { Navbar, Nav, Image } from "react-bootstrap";

import './Navbar.scss';

import githubLogo from "../images/github-light.png";
import { PictureAsPdf } from "@material-ui/icons";

class CustomNavbar extends Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return (

            <Navbar id="navbar" sticky='top'>
                <Navbar.Brand className="nav-logo" onClick={this.scrollToTop}>
                <PictureAsPdf className="mr-2"/> PDF Master
                </Navbar.Brand>

                <Nav className="ml-auto">

                    <Nav.Link className="nav-item" href="https://github.com/leminchan/pdf-master"
                                target="_blank" rel="noopener noreferrer">
                    <Image className="github-logo my-auto" src = { githubLogo } rounded fluid />
                    </Nav.Link>

                </Nav>
            </Navbar>

        );

    }

}

export default CustomNavbar;