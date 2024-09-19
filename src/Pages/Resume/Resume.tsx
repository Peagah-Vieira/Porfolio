import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "Assets/Curriculo Peagah - 2024.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "Components/Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "Pages/Resume/Resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <section>
                    <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                        My <strong className="main-color">Resume</strong>
                    </h1>
                    <Row className="resume">
                        <Document file={pdf} className="d-flex justify-content-center">
                            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                        </Document>
                    </Row>
                    <Row style={{ justifyContent: "center", position: "relative" }}>
                        <Button
                            variant="primary"
                            href={pdf}
                            target="_blank"
                            style={{ maxWidth: "250px" }}
                        >
                            <AiOutlineDownload />
                            &nbsp;Download CV
                        </Button>
                    </Row>
                </section>
            </Container>
        </div>
    );
}