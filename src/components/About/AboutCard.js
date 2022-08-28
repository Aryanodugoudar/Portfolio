import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am{" "}
						<span className="purple">Aryan Odugoudar </span>
						from <span className="purple"> Hulkoti, India.</span>
						<br />I am a{" "}
						<b>
							<span className="purple">2nd Year</span>{" "}
						</b>
						CSE Undergrad in Vellore Institute Of Technology,Chennai.
						<br />
						<br />
						Apart from coding, some other activities that I love to
						do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Binge-Watching
						</li>
						<li className="about-activity">
							<ImPointRight /> Eating
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling
						</li>
					</ul>

					<p
						style={{
							marginBlockEnd: 0,
							color: "rgb(155 126 172)",
							fontSize: "2rem",
						}}
					>
						"Write Drunk Edit Sober!"{" "}
					</p>
					<footer
						className="blockquote-footer"
						style={{ fontSize: "1.5rem" }}
					>
						Aryan Odugoudar
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
