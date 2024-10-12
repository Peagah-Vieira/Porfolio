import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeLogo from "Assets/home-main.svg";
import TypeWriter from "Components/TypeWriter";
import Particle from "Components/Particle";

export default function WelcomeSection() {
    return (
        <Container fluid className="home-section" id="home">
            <Particle />
            <Container className="home-content">
                <Row className="align-items-center">
                    <Col md={7} className="home-header">
                        <h1 className="heading">
                            Bem-vindo ao Meu Mundo!{" "}
                            <span className="wave" role="img" aria-label="wave">
                                👋🏻
                            </span>
                        </h1>
                        <h2 className="heading-name">
                            Eu sou <strong className="main-name">Peagah Vieira</strong>
                        </h2>
                        <div className="typewriter-container">
                            <TypeWriter />
                        </div>
                    </Col>
                    <Col md={5} className="text-center">
                        <img
                            src={HomeLogo}
                            alt="imagem inicial"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
