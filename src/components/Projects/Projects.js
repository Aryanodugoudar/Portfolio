import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import arrhythmia from "../../Assets/Projects/arrhythmia.png";
import face from "../../Assets/Projects/face.png";
import underwater from "../../Assets/Projects/underwater.jpeg";
import student from "../../Assets/Projects/student.jpeg";
import llm from "../../Assets/Projects/llm.png";

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

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={underwater}
							isBlog={false}
							title="Underwater Trash Detection"
							description="A Machine Learning model to detect trash under water "
							link="https://github.com/Aryanodugoudar/Under-water-object-detection"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={student}
							isBlog={false}
							title="Student Profile Tracker"
							description="A website and an app to track the students profile"
							link="https://github.com/Aryanodugoudar/student-portal"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={llm}
							isBlog={false}
							title="Marjorie AI"
							description="A chatbot for aged care in Australia"
							// link="https://github.com/Aryanodugoudar/student-portal"
						/>
					</Col>

					
				</Row>
				
			</Container>
		</Container>
	);
}

export default Projects;
