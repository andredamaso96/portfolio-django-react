import React, { Component } from 'react'

export class Experience extends Component {
    render() {
        return (
            <div>
                <section id="experience" className="about-mf sect-pt4 route">
                    <div className="container">
                        <div className="box-card row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="title-box-2">
                                            <h5 className="title-left">Experience</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        {/* <div className="row item">
                                            <div className="col-md-3"> */}
                                                {/* <div key="{education.school}"> */}
                                                <div>
                                                    <h5>Web Developer</h5>
                                                    <p className="info">Noble Strategy <span>&bull;</span><em className="date"> Oct/2020 - Currently</em></p>
                                                    <p><span>&bull;</span> Desenvolvimento de aplicações web</p>
                                                    <p><span>&bull;</span> Web-scrapping</p>
                                                    <p className="technologies"><strong>Tecnologias:</strong> PHP, HTML/CSS, Prestashop, Python</p>
                                                </div>
                                            {/* </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default Experience
