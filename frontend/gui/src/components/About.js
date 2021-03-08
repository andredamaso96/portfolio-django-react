import React, { Component } from 'react'
import MyPhoto from "../images/foto_perfil.jpg"
import axios from 'axios'

const ABOUT_URL = "http://127.0.0.1:8000/api/about/"
const SKILLS_URL = "http://127.0.0.1:8000/api/skills/"

export class About extends Component {
    
    constructor() {
        super();

        this.state = {
          about: [] ,
          skills: []
          // skills: [
          //   { id: "HTML5_skill", content: "HTML5/CSS3", porcentage: "80%", value: "80" },
          //   {
          //     id: "JavaScript_skill",
          //     content: "JavaScript",
          //     porcentage: "75%",
          //     value: "75"
          //   },
          //   {
          //     id: "ReactJS_skill",
          //     content: "ReactJS",
          //     porcentage: "70%",
          //     value: "70"
          //   },
          //   {
          //     id: "Python_skill",
          //     content: "Python",
          //     porcentage: "80%",
          //     value: "80"
          //   },
          //   {
          //     id: "Django_skill",
          //     content: "Django",
          //     porcentage: "70%",
          //     value: "70"
          //   },
          //   {
          //     id: "Golang_skill",
          //     content: "Golang",
          //     porcentage:"50%",
          //     value: "50"
          //   },
          //   {
          //     id: "Git",
          //     content: "Git",
          //     porcentage: "80%",
          //     value: "80"
          //   },
          //   {
          //     id: "Java_skill",
          //     content: "Java",
          //     porcentage:"40%",
          //     value: "40"
          //   },
          //   {
          //     id: "Spring_skill",
          //     content: "Spring",
          //     porcentage:"40%",
          //     value: "40"
          //   },
          // ],
          // about_me: [
          //   {
          //     id: "first-p-about",
          //     content:
          //       "Self-taught and enthusiast learner, from the moment I produced “Hello World” in the console of my first application, I knew I was hooked into the world of software development. But software development has never been “just a job” for me, it’s offered an engaging challenge to continually learn and improve my skills by creating software. What started with a simple “Hello World” has become a passion that only gets more exciting as the time go by."
          //   },
          //   {
          //     id: "second-p-about",
          //     content:
          //       "I work with both the front and back ends of a website or sotfware application. I design client-side and server-side architecture with well-functioning databases. I also have experienced with writting effective APIs and testing software. Troubleshoot, debug and upgrade software, I try to cover everything while writting technical documentation. I care about best practices, clean code and architecture since I have been reading about two books of Robert C. Martin which are clean code and clean architecture."
          //   },
          // ]
        };


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

                            {this.state.about.map((about) => (
                            <div key={about.id} className="col-md-6 border-right">
                            <div className="about-me pt-4 pt-md-0">
                                <div className="title-box-2">
                                    <h5 className="title-left">About Me</h5>
                                </div>
                                

                                <img src={about.image} alt="Avatar" ></img>
                                <p>Setúbal, Portugal</p>
                                <div className="download">
                                  <p>
                                    <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
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
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
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
                        );
                      })}
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

export default About
