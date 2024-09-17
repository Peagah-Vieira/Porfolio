import React from "react";
import { Container } from "react-bootstrap";
import Particle from "Components/Particle";
import "Pages/About/About.css";
import AboutMeSection from "./AboutMeSection";
import ProfessionalSection from "./ProfessionalSection";
import ToolsSection from "./ToolsSection";
import CommitsSection from "./CommitsSection";

export default function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <AboutMeSection />
                <ProfessionalSection />
                <ToolsSection />
                <CommitsSection />
            </Container>
        </Container>
    )
}