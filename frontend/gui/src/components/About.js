import React, { Component } from 'react'

const ABOUT_URL = "http://127.0.0.1:8000/api/about/"
const SKILLS_URL = "http://127.0.0.1:8000/api/skills/"

export default class About extends Component {

    state = {
      about: [] ,
      skills: []
    }

    componentDidMount() {
      fetch(ABOUT_URL)
        .then(res => res.json())
        .then(about => {
          this.setState({ about })
        });

      fetch(SKILLS_URL)
      .then(res => res.json())
      .then(skills => {
        this.setState({ skills })
      });
    }


    render() {
        return (
            <div>
                <section id="about" className="about-mf sect-pt4 route">
                    <div className="container">
                    <div className="box-card row">
                        <div className="col-sm-12">
                       
                            <div className="row">

                            {this.state.about.map((about, id) => (

                            <div key={id} className="col-md-6 border-right">
                            <div className="about-me pt-4 pt-md-0">
                                <div className="title-box-2">
                                    <h5 className="title-left">About Me</h5>
                                </div>
                                

                                <img src={about.image} alt="Avatar" ></img>
                                <p>Setúbal, Portugal</p>
                                <div className="download">
                                  <p>
                                    <a href="/documents/CV-AndréDâmaso-PT.pdf" className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                                  </p>
                                </div>
                                    <p className="lead">
                                    {about.description}
                                    </p>
                                    
                                </div>
                            </div>

                              )
                            )}
                            <div className="col-md-6">
                                <div className="title-box-2">
                                    <h5 className="title-left">Skills</h5>
                                </div>
                            <div className="skill-mf">
                      {this.state.skills.map((skill, id) => (
                          <React.Fragment key={id}>
                            <span>{skill.technology}</span>{" "}
                            <span className="pull-right">
                              {skill.value}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.value + "%" }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        )
                      )}
                    </div>
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


