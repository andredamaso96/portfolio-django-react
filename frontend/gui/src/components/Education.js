import React, { Component } from 'react'

export class Education extends Component {
    render() {
        return (
            <div>
                <section id="education" className="education-mf sect-pt4 route">
                    <div className="container">
                        <div className="box-card row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="title-box-2">
                                            <h5 className="title-left">Education</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        {/* <div className="row item">
                                            <div className="col-md-3"> */}
                                                {/* <div key="{education.school}"> */}
                                                <div>
                                                    <h5>Licenciatura em Engenharia Informática</h5>
                                                    <p className="info">IPBeja Escola Superior de Tecnologias e Gestão <span>&bull;</span><em className="date">2015/2020</em></p>
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

export default Education
