import React from "react";
import { Row, Col } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiMongodb,
    DiPython,
    DiPhp,
} from "react-icons/di";
import {
    SiPostgresql,
    SiTypescript,
    SiLaravel,
    SiTailwindcss,
    SiDjango,
} from "react-icons/si";

export default function ProfessionalSection() {
    return (
        <section>
            <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />  {/* JavaScript */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiReact />  {/* React */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiTypescript />  {/* TypeScript */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiPhp />  {/* PHP */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiLaravel />  {/* Laravel */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiMongodb />  {/* MongoDB */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiPostgresql />  {/* PostgreSQL */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiTailwindcss />  {/* Tailwind CSS */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiPython />  {/* Python */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiDjango />  {/* Django */}
                </Col>
            </Row>
        </section>

    )
}