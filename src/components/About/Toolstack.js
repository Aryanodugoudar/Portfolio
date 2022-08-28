import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiPycharm,
	SiVisualstudiocode,
	SiIntellijidea,
	SiNetlify,
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiIntellijidea />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNetlify />
			</Col>
		</Row>
	);
}

export default Toolstack;
