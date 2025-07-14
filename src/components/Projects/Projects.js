import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import uber from "../../Assets/Projects/uber.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import customer from "../../Assets/Projects/customer.png";
import Fake from "../../Assets/Projects/Fake.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Clone Amazon Page"
              description=" Amazon landing page built to mimic its layout, design, and key features using modern web technologies like HTML, CSS, and JavaScript for learning or project purposes.this project showcases my skills in front-end development and attention to detail, providing a user-friendly interface that resembles the original Amazon experience."
              ghLink="https://github.com/BrandDanish/First-Project-of-Web-Development"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fake}
              isBlog={false}
              title="Fake Currency Detector"
              description="A fake currency detector built with Python uses image processing and machine learning techniques to identify counterfeit banknotes with display a flag of pakistan when successfully detected. The project utilizes OpenCV for image processing and a trained machine learning model to classify the authenticity of the currency notes."
              ghLink="https://github.com/BrandDanish/Fake-Currency-Detector"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI-Powered Code Review Editor"
              description="An AI-powered code review system built with the MERN stack and integrated with Gemini AI automates the process of analyzing code for errors, best practices, and improvements, providing intelligent suggestions to enhance code quality and developer productivity.this project showcases my skills in full-stack development, AI integration, and code analysis, offering a valuable tool for developers to streamline their code review process."
              ghLink="https://github.com/BrandDanish/Code_Reviewer"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber}
              isBlog={false}
              title="Uber App Clone"
              description="An Uber-like app built with the MERN stack (MongoDB, Express.js, React, Node.js) replicates ride-booking features such as real-time location tracking, driver-rider matching, and trip management, offering a full-stack solution for ride-hailing services."
              ghLink="https://github.com/BrandDanish/Uber_Project"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customer}
              isBlog={false}
              title="Customer Segmentation "
              description="Customer segmentation using K-Means is a machine learning technique that groups customers into distinct clusters based on similar behaviors or characteristics, helping businesses target marketing strategies and improve customer experience effectively.this project showcases my skills in data analysis, clustering algorithms, and customer insights, providing valuable information for businesses to tailor their offerings."
              ghLink="https://github.com/BrandDanish"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/BrandDanish"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
