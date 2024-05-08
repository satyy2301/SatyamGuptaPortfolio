import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Satyam Gupta </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            I am seeking job and internship opportunities while creating projects on the side. 
            <br />
            I am currently in 4th year of my BTech degree in Computer Science form Jaypee Institute of Inforamtion and Technology, Noida.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Movie Scripts
            </li>
            <li className="about-activity">
              <ImPointRight />  Reading Fictional Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports like Cricket and Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything you give your time to always comes useful at sometime!"{" "}
          </p>
          <footer className="blockquote-footer">Satyam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
