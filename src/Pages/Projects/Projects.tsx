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
                        <h1 className="project-heading" style={{ textTransform: "uppercase" }}>
                            Meus Trabalhos <strong className="main-color">Recentes</strong>
                        </h1>
                        <p style={{ color: "white" }}>
                            Aqui estão alguns projetos em que trabalhei recentemente.
                        </p>
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={DjangoDash}
                                    cardTitle="DjangoDash"
                                    cardDescription="DjangoDash é um CRM construído com Django, apresentando um design moderno e elegante, impulsionado pelo Tailwind CSS. Ele fornece autenticação personalizada, painéis responsivos e funcionalidade completa de CRUD, oferecendo uma solução eficiente e intuitiva para gerenciar dados de clientes."
                                    githubLink="https://github.com/Peagah-Vieira/DjangoDash"
                                />
                            </Col>
                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={NexaCMS}
                                    cardTitle="NexaCMS"
                                    cardDescription="NexaCMS é um CMS monolítico construído com React e TypeScript no front-end e Laravel no back-end. Funcionando em um ambiente Docker, garante fácil configuração e gerenciamento, enquanto oferece uma interface de gerenciamento de conteúdo segura e modular para controle flexível."
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
