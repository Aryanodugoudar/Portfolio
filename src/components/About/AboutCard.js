import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aryan Odugoudar </span>
            from <span className="purple">India.</span>
            <br /> I am a Computer Science Undergrad in Australian National University, Australia.
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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

          <p style={{ color: "rgb(155 126 172)" }}>
          "Write Drunk Edit Sober!"{" "}
          </p>
          <footer className="blockquote-footer">Aryan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
