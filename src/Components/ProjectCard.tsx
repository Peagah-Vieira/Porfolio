import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

type props = {
    imgPath: string,
    cardTitle: string,
    cardDescription: string,
    githubLink: string,
}

export default function ProjectCard({ imgPath, cardTitle, cardDescription, githubLink }: props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {cardDescription}
                </Card.Text>
                <Button variant="primary" href={githubLink} target="_blank">
                    <BsGithub /> &nbsp;
                    GitHub
                </Button>
            </Card.Body>
        </Card>
    );
}