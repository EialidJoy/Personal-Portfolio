import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { professionalProjects, personalProjects, meta } from "../../content_option";
import { FaBuilding, FaCalendarAlt, FaExternalLinkAlt, FaLock, FaGithub, FaSatelliteDish, FaFilm, FaShieldAlt } from "react-icons/fa";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <section className="project-section">
          <h2 className="section-heading">
            <FaBuilding className="section-icon" />
            Professional Projects
          </h2>
          <p className="section-subtitle">
            Enterprise and research projects built in professional settings
          </p>

          <div className="pro-grid">
            {professionalProjects.map((project) => (
              <Link
                to={`/project/${project.slug}`}
                key={project.slug}
                className="pro-card"
              >
                <div className="pro-card-header">
                  <span className="pro-badge">{project.status}</span>
                  <span className="pro-category">{project.category}</span>
                </div>
                <h3 className="pro-card-title">{project.title}</h3>
                <p className="pro-card-client">{project.client}</p>
                <p className="pro-card-summary">{project.summary}</p>
                <div className="pro-card-meta">
                  <span className="pro-card-duration">
                    <FaCalendarAlt /> {project.duration}
                  </span>
                </div>
                <div className="pro-card-tech">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-pill tech-more">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
                {project.status === "In Production" ? (
                  <div className="pro-card-note">
                    <FaLock className="pro-card-note-icon" />
                    <span>Deployed in secure production — no public demo available</span>
                  </div>
                ) : (
                  <div className="pro-card-note pro-card-note-research">
                    <FaGithub className="pro-card-note-icon" />
                    <span>Academic research — source in professor's private repo</span>
                  </div>
                )}
                <div className="pro-card-footer">
                  <span className="pro-card-link">
                    View Details <FaExternalLinkAlt />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="project-section mt-5">
          <h2 className="section-heading">
            <FaGithub className="section-icon" />
            Personal Projects
          </h2>
          <p className="section-subtitle">
            Open-source side projects and experiments
          </p>

          <div className="personal-grid">
            {personalProjects.map((data, i) => {
              const iconMap = {
                radar: <FaSatelliteDish />,
                movie: <FaFilm />,
                auth: <FaShieldAlt />,
              };
              return (
                <div key={i} className="personal-card">
                  <div className="personal-card-icon">
                    {iconMap[data.icon]}
                  </div>
                  <div className="personal-card-body">
                    <h3 className="personal-card-title">{data.description}</h3>
                    <p className="personal-card-summary">{data.summary}</p>
                    <div className="personal-card-tech">
                      {data.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="personal-card-link"
                    >
                      <FaGithub /> View Source Code
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </HelmetProvider>
  );
};
