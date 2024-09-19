import React from "react";
import { Row, Col } from "react-bootstrap";
import laptopImg from "Assets/about.png";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutMeSection() {
    return (
        <section>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col
                    md={7}
                    style={{
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                    }}
                >
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                        Get to Know <strong className="main-color">Me</strong>
                    </h1>
                    <Card className="quote-card-view">
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <div style={{ textAlign: "justify" }}>
                                    <p>
                                        Hello everyone, I’m <span className="main-color">Peagah Vieira</span> from <span className="main-color">Brazil</span>.
                                    </p>
                                    <p>
                                        Currently, I’m pursuing a degree in System Administration at <span className="main-color">Estácio de Sá</span>.
                                    </p>
                                    <p>
                                        I’m passionate about coding, solving complex problems creatively, and developing impactful digital solutions that enhance user experiences.
                                    </p>
                                    <p>
                                        Beyond coding, I have a variety of interests that keep me inspired and motivated. Here are a few things I enjoy!
                                    </p>
                                </div>
                                <div>
                                    <ul>
                                        <li className="about-activity">
                                            <ImPointRight /> Playing Video Games
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Writing Poems
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Exploring Technology
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="blockquote-footer">
                                        "My goal is to create things that inspire and make an impact!"{" "}
                                    </p>
                                    <footer className="blockquote-footer">Peagah Vieira</footer>
                                </div>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    md={5}
                    style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    className="about-img"
                >
                    <img src={laptopImg} alt="about" className="img-fluid" />
                </Col>
            </Row>
        </section>
    )
}