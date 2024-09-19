import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "Components/Particle";
import ProjectCard from "Components/ProjectCard";
import NexaCMS from "Assets/NexaCMS.jpeg";
import DjangoDash from "Assets/DjangoDash.jpeg";
import "Pages/Projects/Projects.css";

export default function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <section>
                    <div>
                        <h1 className="project-heading">
                            My Recent <strong className="main-color">Works </strong>
                        </h1>
                        <p style={{ color: "white" }}>
                            Here are a few projects I've worked on recently.
                        </p>
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={DjangoDash}
                                    cardTitle="DjangoDash"
                                    cardDescription="DjangoDash is a CRM built with Django, featuring a sleek and modern design powered by Tailwind CSS. It provides custom authentication, responsive dashboards, and full CRUD functionality, offering an efficient and intuitive solution for managing customer data."
                                    githubLink="https://github.com/Peagah-Vieira/DjangoDash"
                                />
                            </Col>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={NexaCMS}
                                    cardTitle="NexaCMS"
                                    cardDescription="NexaCMS is a monolithic CMS built with React and TypeScript on the front-end and Laravel on the back-end. Running in a Docker environment, it ensures easy setup and management while offering a secure, modular content management interface for flexible control."
                                    githubLink="https://github.com/Peagah-Vieira/NexaCMS"
                                />
                            </Col>
                        </Row>
                    </div>
                </section>
            </Container>
        </Container>
    );
}
