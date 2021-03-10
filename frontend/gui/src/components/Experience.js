import React, { Component } from 'react'

const BASE_URL = "http://127.0.0.1:8000/api/experiences/";

export class Experience extends Component {

    state = {
        experiences: []
    }

    componentDidMount() {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(experiences => {
            this.setState({ experiences })
          });
      }

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

                                    {this.state.experiences.map((experience, id) => (

                                    <div key={experience.id} className="experience-block">
                                        {/* <div className="row item">
                                            <div className="col-md-3"> */}
                                                {/* <div key="{education.school}"> */}

                                                <div>
                                                    <h5>{experience.job_title}</h5>
                                                    <p className="info">{experience.company} <span>&bull;</span><em className="date"> {experience.start_date} - { experience.end_date === null ? "Currently" : experience.end_date }</em></p>
                                                    <p><span>&bull;</span> {experience.jobs_duties}</p>
                                                    <p className="technologies"><strong>Technologies:</strong> {experience.technologies}</p>
                                                </div>


                                            {/* </div>
                                        </div> */}
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

export default Experience
