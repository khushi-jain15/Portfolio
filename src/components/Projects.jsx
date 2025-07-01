import React from "react";
import projects from "./data/projects.json";

const Projects = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {projects.map((data) => (
          <div
            key={data.key}
            className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
          >
            <div
              className="card bg-dark text-light h-100"
              style={{
                width: "18rem",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-items-center p-3">
                <img
                  src={process.env.PUBLIC_URL + `/assets/work/${data.imageSrc}`}
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column text-center">
                <div className="flex-grow-1">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                </div>
                <div className="mt-auto d-flex justify-content-center">
                  <a
                    href={data.demo}
                    className="btn btn-primary mx-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={data.source}
                    className="btn btn-warning mx-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
