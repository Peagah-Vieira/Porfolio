import React from "react";
import { Row, Col } from "react-bootstrap";
import laptopImg from "Assets/about.svg";
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
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textTransform: "uppercase" }}>
                        ME <strong className="main-color">CONHEÇA</strong>
                    </h1>
                    <Card className="quote-card-view">
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <div style={{ textAlign: "justify" }}>
                                    <p>
                                        Olá a todos! Sou <span className="main-color">Peagah Vieira</span>, diretamente do <span className="main-color">Brasil</span>.
                                    </p>
                                    <p>
                                        No momento, estou me aprofundando em Administração de Sistemas na <span className="main-color">Estácio de Sá</span> e trabalhando na <span className="main-color">Zero62</span> como desenvolvedor full-stack.
                                    </p>
                                    <p>
                                        Sou apaixonado por programação, sempre buscando resolver problemas complexos com criatividade e desenvolver soluções digitais que realmente façam a diferença na vida das pessoas.
                                    </p>
                                    <p>
                                        Além da programação, tenho muitos interesses que me mantêm inspirado e motivado. Aqui estão algumas atividades que adoro!
                                    </p>
                                </div>
                                <div>
                                    <ul>
                                        <li className="about-activity">
                                            <ImPointRight /> Video Games
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Escrever Poemas
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Explorar as Novidades em Tecnologia
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="blockquote-footer">
                                        "Meu objetivo é criar experiências que inspirem e deixem uma marca positiva!"{" "}
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
                    <img src={laptopImg} alt="sobre" className="img-fluid" />
                </Col>
            </Row>
        </section>
    );
}
