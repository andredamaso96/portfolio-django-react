import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap"
import { FiSend } from "react-icons/fi"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"


const Style = {
    backgroundColor: 'inherit',
    color: 'inherit'
}
  

export class Contact extends Component {
    render() {
        return (
            <div>
                 <div className="container">
                    <div className="contact">
                    <div className="row box-card">
                        <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                            <h5 className="title-left">Get in Touch</h5>
                        </div>
                        <div className="more-info">
                            <p className="lead">
                            Whether you want to get in touch, talk about a project
                            collaboration, or just say hi, I'd love to hear from you.
                            <br />
                            Simply fill the form and send me an email.
                            </p>
                        </div>
                        <div className="socials">
                            <ul>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin size={40} style={{ color: "grey" }}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/iButcat" target="_blank" rel="noopener noreferrer">
                                <AiFillGithub size={40} style={{ color: "grey" }}/>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm col-md-6">
                        <div className="title-box-2">
                            <h5 className="title-left">Send A Message</h5>
                        </div>
                        <Form id="" onSubmit="">
                            <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value=""
                                onChange=""
                                type="name"
                                placeholder="Enter name"
                                style={Style}
                                className="form-control"/>
                            {/* <div className="error">{this.state.nameError}</div> */}
                            </Form.Group>
                            <Form.Group>
                            <Form.Label controlId="formBasicEmail">Email</Form.Label>
                            <Form.Control
                                value=""
                                onChange=""
                                type="email"
                                placeholder="Enter Email"
                                style={Style}
                                className="form-control"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            {/* <div className="error">{this.state.emailError}</div> */}
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                value=""
                                onChange=""
                                type="name"
                                style={Style}
                                placeholder="Enter message"
                                as="textarea"
                                rows="3" />
                            {/* <div className="error">{this.state.messageError}</div> */}
                            </Form.Group>
                            <Button variant="primary"> Send <FiSend /></Button>
                        </Form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
