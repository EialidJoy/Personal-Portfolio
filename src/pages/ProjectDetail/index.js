import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { professionalProjects, meta } from "../../content_option";
import {
  FaArrowLeft,
  FaBuilding,
  FaCalendarAlt,
  FaLock,
  FaCheckCircle,
  FaGithub,
  FaFlask,
} from "react-icons/fa";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = professionalProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <HelmetProvider>
        <Container className="About-header">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col>
              <h1 className="display-4 mb-4">Project Not Found</h1>
              <Link to="/portfolio" className="back-link">
                <FaArrowLeft /> Back to Projects
              </Link>
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
    );
  }

  const isResearch = project.status === "Research";

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {project.title} | {meta.title}
          </title>
          <meta name="description" content={project.summary} />
        </Helmet>

        <Row className="mb-4 mt-3 pt-md-3">
          <Col>
            <Link to="/portfolio" className="back-link">
              <FaArrowLeft /> Back to Projects
            </Link>
          </Col>
        </Row>

        {project.note && (
          <Row className="mb-4">
            <Col lg="8">
              <div className={`pd-note-top ${isResearch ? "pd-note-top-research" : ""}`}>
                {isResearch ? (
                  <FaFlask className="pd-note-top-icon" />
                ) : (
                  <FaLock className="pd-note-top-icon" />
                )}
                <p>{project.note}</p>
              </div>
            </Col>
          </Row>
        )}

        <Row className="mb-4">
          <Col lg="8">
            <div className="pd-header">
              <span className={`pd-badge ${isResearch ? "pd-badge-research" : ""}`}>
                {project.status}
              </span>
              <span className="pd-category">{project.category}</span>
            </div>
            <h1 className="pd-title">{project.title}</h1>
            <div className="pd-meta-row">
              <span className="pd-meta-item">
                <FaBuilding /> {project.client}
              </span>
              <span className="pd-meta-item">
                <FaCalendarAlt /> {project.duration}
              </span>
            </div>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="8">
            <h2 className="pd-section-title">Overview</h2>
            <p className="pd-summary">{project.summary}</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="8">
            <h2 className="pd-section-title">Key Responsibilities</h2>
            <ul className="pd-responsibilities">
              {project.responsibilities.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="pd-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="5">
            <h2 className="pd-section-title">Technologies</h2>
            <div className="pd-tech-grid">
              {project.technologies.map((tech) => (
                <span key={tech} className="pd-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </Col>
          <Col lg="3">
            <h2 className="pd-section-title">Skills</h2>
            <div className="pd-tech-grid">
              {project.skills.map((skill) => (
                <span key={skill} className="pd-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="8">
            <h2 className="pd-section-title">
              {isResearch ? "Institution" : "Company"}
            </h2>
            <div className="pd-company-card">
              <div className="pd-company-info">
                <p className="pd-company-name">{project.company}</p>
                <p className="pd-company-client">
                  {isResearch ? "Department" : "Client"}:{" "}
                  <strong>{project.client}</strong>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {project.link && (
          <Row className="mb-5">
            <Col lg="8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-github-link"
              >
                <FaGithub /> View Public Repository
              </a>
            </Col>
          </Row>
        )}
      </Container>
    </HelmetProvider>
  );
};
