import React, { Component } from 'react'

const BASE_URL = "http://127.0.0.1:8000/api/educations/";

export class Education extends Component {

    state = {
        educations: []
    }

    componentDidMount() {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(educations => {
            this.setState({ educations })
          });
      }



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

                                            {this.state.educations.reverse().map((education) => (
                                            
                                            <div className="experience-block">

                                                <div>
                                                    <h5>{education.course}</h5>
                                                    <p className="info">{education.school} <span>&bull;</span><em className="date"> {education.start_date} - { education.end_date === null ? "Currently" : education.end_date }</em></p>
                                                </div>
                                            
                                            </div>

                                             )
                                        )}
                                      
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
