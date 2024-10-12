import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="about-description">
                        <h1 className="about-heading">
                            DEIXE-ME <span className="main-color">ME APRESENTAR</span>
                        </h1>
                        <div className="about-body">
                            <p>
                                Olá! Sou <span className="main-color">Peagah Vieira</span> e descobri minha paixão por programação, aprimorando minhas habilidades continuamente! 💻
                            </p>
                            <p>
                                Atualmente, trabalho como <strong>Desenvolvedor Full-Stack na Zero62</strong>, onde aplico tecnologias modernas como
                                <i>
                                    <b className="main-color"> Laravel, React e TypeScript.</b>
                                </i>
                            </p>
                            <p>
                                Minhas principais áreas de interesse incluem a construção de &nbsp;
                                <i>
                                    <b className="main-color">Aplicações Web Escaláveis</b> e o potencial do{" "}
                                    <b className="main-color">Desenvolvimento Back-end com Python e Laravel.</b>
                                </i>
                            </p>
                            <p>
                                Estou sempre ansioso para explorar novas tecnologias e aprimorar minhas habilidades em desenvolvimento full-stack, enfrentando cada desafio que o mundo da tecnologia traz!
                            </p>
                        </div>
                    </Col>
                    <Col md={4} className="my-avatar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="Avatar de Pedro Henrique" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="about-social">
                        <h1>ME ENCONTRE EM</h1>
                        <p>
                            Sinta-se à vontade para <span className="main-color">conectar-se</span> comigo
                        </p>
                        <ul className="about-social-links">
                            <li className="social-icons">
                                <a
                                    href={process.env.REACT_APP_GITHUB_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour home-social-icons"
                                    aria-label="Meu perfil no GitHub"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href={process.env.REACT_APP_LINKEDIN_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour home-social-icons"
                                    aria-label="Meu perfil no LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href={process.env.REACT_APP_INSTAGRAM_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour home-social-icons"
                                    aria-label="Meu perfil no Instagram"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
