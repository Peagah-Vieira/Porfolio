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
            <h1 className="project-heading">
                <strong className="purple">Tools</strong> I use
            </h1>
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