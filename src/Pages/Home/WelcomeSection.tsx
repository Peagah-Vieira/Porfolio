import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeLogo from "Assets/home-main.svg"
import TypeWriter from "Components/TypeWriter";
import Particle from "Components/Particle";

export default function WelcomeSection() {
    return (
        <Container fluid className="home-section" id="home">
            <Particle />
            <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Welcome to My World!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                        <h2 className="heading-name">
                            I'm <strong className="main-name">Peagah Vieira</strong>
                        </h2>
                        <div style={{ paddingLeft: 30, paddingBottom: 50, paddingTop: 10, textAlign: "left" }}>
                            <TypeWriter />
                        </div>
                    </Col>
                    <Col md={5} style={{ paddingBottom: 20 }}>
                        <img
                            src={HomeLogo}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}