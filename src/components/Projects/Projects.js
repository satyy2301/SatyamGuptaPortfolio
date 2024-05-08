import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpeg";
import emotion from "../../Assets/Projects/emotion.jpg";
import editor from "../../Assets/Projects/codeEditor.jpeg";
import chatify from "../../Assets/Projects/chatify.jpeg";
import suicide from "../../Assets/Projects/suicide.jpg";
import bitsOfCode from "../../Assets/Projects/blog.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Foodie"
              description="Our MERN-based Online Canteen Service Platform revolutionizes dining. It eliminates long queues and crowded canteens with contactless ordering and secure payments, providing convenience and efficiency."
              ghLink="https://github.com/aryan2702p/Online_Ordering_system"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Localisation in Internet of Things"
              description="Developed an IoT localization system using Python, Raspberry Pi, Arduino, and Jupyter notebooks, applying Isomap, LLE, and Laplacian Eigenmaps for pattern extraction and visualization. Designed user-friendly interface, delivering exceptional performance, enhancing data analysis, and decision-making across industries."
              ghLink="https://github.com/satyy2301/Localization-in-Internet-of-Things"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FlappyBird"
              description="Designed and optimized Flappy Bird game for Android using Unity and C#, incorporating smooth controls, dynamic obstacle generation, and performance enhancements for an engaging user experience.
              "
              ghLink="https://github.com/dgkanatsios/FlappyBirdStyleGame"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Numeromatch.com"
              description="Dynamic website seamlessly blending Indian astrology and numerology, offering comprehensive matchmaking insights."
              ghLink="https://github.com/satyy2301/dsw-project"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Secure Messaging Algorithm "
              description="Revolutionizing information security with SmAES Mark algorithm: seamlessly embedding encrypted data within digital media for covert transmission, utilizing Advanced Encryption Standard (AES) for robust protection."
              ghLink="https://github.com/aryan2702p/Image_Stegananography_encryption"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Crop Production Aid"
              description="Empowering agriculture with Farmer Helper, a Python-based tool within Jupyter Notebook, integrating Decision Tree Analyzer and graphical representations for actionable insights and informed decision-making."
              ghLink="https://github.com/satyy2301/Crop-Production-Helper"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
