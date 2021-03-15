import React, { useState, useEffect } from 'react'
import { AiFillGithub } from "react-icons/ai"
import axios from 'axios'
import { Link } from 'react-router-dom'


const DetailProject = (props) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        const id = props.match.params.id;
        console.log(id);

        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/projects/${id}`);
                setProject(res.data);
            }
            catch (err) {

            }
        }

        fetchData();
    }, [props.match.params.id]);


    const createProject = () => {
        return {__html: project.content};
    };

    return (
        <div className='container box-card' id="detail-project">
          <div className="row">
            <div className="col col-sm-6">
              <img className="img-fluid" alt="project" id="detail-image" src={project.image} />
           </div>
           <div className="col col-sm-6">
             <h2 className='text-center'>{project.title}</h2>
             <div className='text-center'dangerouslySetInnerHTML={createProject()} />
             <hr />
             <p>{project.description}</p>
             <p className="technologies"><strong>Technologies:</strong> {project.technologies}</p>
             <p><a className="repository" href={project.Github} target="_blank" rel="noopener noreferrer">
                <AiFillGithub size={25} style={{ color: "grey", padding: "3px" }}/>
                Source Code
            </a>
            </p>
             <p className="lead mb-5"><Link to='/' className="font-weight-bold">Back to Portfolio</Link></p>
           </div>
         </div>
       </div>
    );
}

export default DetailProject;