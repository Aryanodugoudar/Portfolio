import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import arrhythmia from "../../Assets/Projects/arrhythmia.png";
import face from "../../Assets/Projects/face.png";
function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={arrhythmia}
							isBlog={false}
							title="Arrhythmia classification using CNN"
							description="Detection of different type of Arrhythmia by ECG Classification using Convolution Neural Network."
							link="https://github.com/Aryanodugoudar/Arrhythmia-Classification-Using-ECG"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={face}
							isBlog={false}
							title="Face detection using opencv"
							description="A Web Application where the user can determine face using computer vision"
							link="https://github.com/Aryanodugoudar/face-recognition-web-app"
						/>
					</Col>

					
				</Row>
				
			</Container>
		</Container>
	);
}

export default Projects;
