import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

export default function CommitsSection() {
    return (
        <section>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <h2 className="project-heading" style={{ paddingBottom: "20px", textTransform: "uppercase" }}>
                    Dias que <strong className="main-color">Codei</strong>
                </h2>
                <GitHubCalendar
                    username="Peagah-Vieira"
                    blockSize={15}
                    blockMargin={5}
                    color="#397FFBFF"
                    fontSize={16}
                />
            </Row>
        </section>
    )
}
