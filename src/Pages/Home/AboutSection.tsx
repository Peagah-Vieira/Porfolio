import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

type props = {
    githubLink: string,
    instagramLink: string,
    linkedinLink: string,
}

export default function AboutSection({ githubLink, instagramLink, linkedinLink }: props) {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I discovered my passion for programming and have been honing my skills ever since! 💻
                            <br />
                            <br />I am proficient in modern web technologies like
                            <i>
                                <b className="purple"> Laravel, React, and TypeScript. </b>
                            </i>
                            <br />
                            <br />
                            My main areas of interest include building &nbsp;
                            <i>
                                <b className="purple">Scalable Web Applications </b> and exploring the potential of{" "}
                                <b className="purple">
                                    Back-end Development with Python and Laravel.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I apply my passion for creating scalable and high-performance applications using
                            <b className="purple"> Laravel </b> and
                            <i>
                                <b className="purple">
                                    {" "} React.
                                </b>
                            </i>
                            &nbsp; I'm always eager to explore new technologies and improve my skills in full-stack development, embracing every challenge the tech world brings!

                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href={linkedinLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href={instagramLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}