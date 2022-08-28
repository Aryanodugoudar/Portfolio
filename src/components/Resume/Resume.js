import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Aryan-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
	return (
		<Container fluid className="resume-section">
			<Particle />
			<Container>
				<Row className="resume">
					<Col md={6} className="resume-left">
						<h3 className="resume-title">Experience</h3>
						<Resumecontent
							title="Machine Learning and Deep Learning Intern [NUS and HPE]"
							date="June 2022 - July 2022"
							content={[
								"Worked as an academic intern on building a model using Deep Learning",
								"The model classified different classes of Arrhythmia using Convolution Neural Network",
								"Tech Stack User: Tensorflow, Pandas, Matplotlib, Numpy",
							]}
						/>
						<Resumecontent
							title="Research Intern [VIT Chennai]"
							date="August 2022 - Present"
							content={[
								"Working as a Research Intern on AI Malware Detection using Deep Learning"
				
							]}
						/>
						<h3 className="resume-title">
							Extracurricular Activities
						</h3>
						<Resumecontent
							title="AI/ML Project Developer [Microsoft Innovation Club]"

							content={[
								"Working on AI/ML Projects for the club",
							]}
						/>
						<Resumecontent
							title="Data Science Researcher[ Data Science Club]"
							content={[
								"Researching on different data sciecne components",
							]}
						/>
						<Resumecontent
							title="Web Developer[ CYSCOM ]"
							content={[
								"Built a website for Hackoverflow hackathon",
							]}
						/>
						<Resumecontent
							title="Web Developer[ VITrendz]"
							content={[
								"Helped in building Faculty Review System",
							]}
						/>
						<Resumecontent
							title="Student coordinator[ TechnoVIT]"
							content={[
								"Working as a student coordinator for TechnoVIT",
							]}
						/>
					</Col>
					<Col md={6} className="resume-right">
						<h3 className="resume-title">Education</h3>
						<Resumecontent
							title="Vellore Institute Of Technology[VIT , Chennai] "
							date="2021 - Present"
							content={[""]}
						
						/>
						<Resumecontent
							title="12TH BOARD [Pana PU College,Mangalore]"
							date="2019 - 2021"
							content={[""]}
							
						/>
						<Resumecontent
							title="10TH BOARD [SRV,Hulkoti] "
							date="2007 - 2019"
							content={[""]}
						
						/>
						<h3 className="resume-title">Ranks and Achivements</h3>
						<Resumecontent
							title=""
							content={[
								"All India Rank 3 in Alexathon( Hackathon by Amazon)",
								" All India Rank 30 in National Science Exhibition",
							]}
						/>
					</Col>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</Container>
	);
}

export default Resume;
