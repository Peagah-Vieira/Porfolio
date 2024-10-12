import React from "react";
import { Row, Col } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiDocker,
    SiLinux,
    SiSelenium,
    SiInsomnia,
} from "react-icons/si";

export default function ToolsSection() {
    return (
        <section>
            <h2 className="project-heading" style={{ textTransform: "uppercase" }}>
                <strong className="main-color">Ferramentas</strong> que uso
            </h2>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <SiVisualstudiocode />  {/* VSCode */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiDocker />  {/* Docker */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiLinux />  {/* Linux */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiSelenium />  {/* Selenium */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiInsomnia />  {/* Insomnia */}
                </Col>
            </Row>
        </section>
    )
}
