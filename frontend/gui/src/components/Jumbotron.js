import React, { Component } from 'react'
import Typed from 'react-typed'
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../images/foto_perfil.jpg";

export class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron" id="home">
                <div className="container">

                    {/* <div className="image-perfil" style={{ display: "flex", justifyContent: 'center', alignItems: 'center', }}>
                        <ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="300" imageHeight="300" />
                    </div> */}
                    {/* <img src={MyPhoto} alt="Avatar" ></img> */}

                    <h1 className="display-4">I'm André Dâmaso</h1>
                    <div>
                        <p className="lead">
                        <Typed strings={[
                        "Software Developer",
                        "Back End Developer",
                        "Junior Web Developer"
                        ]}
                        typeSpeed={80} backDelay={1100} backSpeed={30} loop />
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron
