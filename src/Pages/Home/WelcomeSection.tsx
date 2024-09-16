import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeLogo from "Assets/home-main.svg"
import TypeWriter from "Components/TypeWriter";
import Particle from "Components/Particle";

type props = {
    devName: string
}

export default function WelcomeSection({ devName }: props) {
    return (
        <Container fluid className="home-section" id="home">
            <Particle />
            <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hi There!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                        <h2 className="heading-name">
                            I'M{" "}
                            <strong className="main-name">{devName}</strong>
                        </h2>
                        <div style={{ padding: 50, textAlign: "left" }}>
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