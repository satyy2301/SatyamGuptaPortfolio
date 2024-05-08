import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
 
  SiVercel,
  SiWindows11, SiUnity , SiJupyter , SiGooglecolab, SiAdobepremierepro ,SiGithub,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11    />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
