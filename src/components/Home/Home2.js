import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span>{" "}
							MYSELF
						</h1>
						<p className="home-about-body">
							I fell in love with{" "}
							<b className="purple">Data Science </b> and ever since,
							I live on the verge of developing things!
							😁💻
							<br />
							<br />I have a fair knowledge in languages like
							<i>
								<b className="purple">
									{" "}
									Python, C, C++, Javascript and Java.{" "}
								</b>
							</i>
							<br />
							<br />
							My field of Interest's are ;
							<i>
								<b className="purple">
									Researching on new Deep Learning models and building efficient Data Science models to solve the real world problems.{" "}
								</b>{" "}
							</i>
							<br />
							<br />
							If I'm not sleeping or programming you will find me
							travelling or eating,
				
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={myImg}
								className="img-fluid"
								alt="avatar"
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to{" "}
							<span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/Aryanodugoudar"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/aryan-odugoudar-28a37b217"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/aryan_odugoudar/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
