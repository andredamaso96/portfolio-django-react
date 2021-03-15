import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { RiMenu3Line } from 'react-icons/ri'

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
          status: "top",
        };
      }

      componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
              if (this.state.status !== "something") {
                this.setState({status: "something"});
              }
            } else {
              if (this.state.status !== "top") {
                this.setState({status: "top"});
              }
            }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }

    render() {
        return (
            
            <nav className="navbar navbar-expand-lg fixed-top"
            style={{
                backgroundColor: this.state.status === "top" ? "transparent" : " rgba(0, 0, 0, 0.9)",
                color: this.state.status === "top" ? "white" : "white",
                boxShadow: this.state.status === "top" ? "" : "0px 8px 18px -8px rgb(0 0 0 / 50%)"
                
            }}>
                <div className="container">
                                       
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon bg-light"><RiMenu3Line
                            style={{ color: "black", backgroundColor: "white" }}/></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={300}>
                                    Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    About</Link>
                            </li>   
                            <li className="nav-item">
                                <Link activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Experience</Link>
                            </li>  
                            <li className="nav-item">
                                <Link activeClass="active"
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Education</Link>
                            </li> 
                            <li className="nav-item">
                                <Link activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Projects</Link>
                            </li> 
                            <li className="nav-item">
                                <Link activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Contact</Link>
                            </li>     
                        </ul>
                    </div>
                </div>
            </nav>
            
        )
    }
}
