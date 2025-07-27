import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project Images

import teeth from "../../Assets/Projects/teeth.jpeg"; // 👈 Add your teeth app image here
import chatapp from "../../Assets/Projects/chatapp.jfif"; // 👈 Chat app image
import ecommerce from "../../Assets/Projects/ecommerce.webp";
import sabir from "../../Assets/Projects/sabir_tailors.png";
import hrms from "../../Assets/Projects/hrms.png";
import mentalease from "../../Assets/Projects/mentalease.png"; // 👈 FYP image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teeth}
              isBlog={false}
              title="Teeth Segmentation App (Flutter + YOLOv8)"
              description="A Flutter-based mobile app that performs real-time teeth segmentation using the YOLOv8-seg model in ONNX format. Supports live camera and gallery image input, with on-device processing via ONNX Runtime."
              ghLink="https://github.com/NabeelSohail321/Teeth_Segmentation"
              // demoLink="https://your-demo-link.com" // Optional
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat App (Flutter + Firebase + Provider)"
              description="A real-time chat application built with Flutter, Firebase Authentication, Cloud RealTime, and Provider for state management. Features include email login, chat syncing, user status, and image sharing."
              ghLink="https://github.com/NabeelSohail321/Chat-Application" // 🔁 Replace with your actual repo link
              // demoLink="https://your-demo-link.com" // Optional: Add demo link if deployed
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Multi-Vendor E-commerce App"
              description="A full-featured multi-vendor e-commerce application built with Flutter and Firebase that supports real-time order tracking with integrated maps, Stripe for secure payments, and dynamic revenue analytics. Sellers can manage products, inventory, and orders, while customers can browse, purchase, and track orders in real-time. Admins can view overall platform revenue and manage vendor registrations. This app demonstrates advanced mobile development, backend integration, and payment gateway expertise."
              ghLink="https://github.com/NabeelSohail321/xoxo_ecommerce"
              // demoLink="https://your-demo-link.com" // Optional
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sabir}
              isBlog={false}
              title="Sabir Tailors – Tailor Management System"
              description="A tailor management system developed for Sabir Tailors to manage customer orders, track stitching progress, and generate printable invoices. Built with Flutter and Firebase, the app allows order creation with details like suit count, type, stitching status, due dates, and customer info. Admins can monitor completed vs pending orders, generate professional invoices, and update stitching progress in real time. A scalable solution for tailoring businesses aiming to go digital."
              ghLink="https://github.com/NabeelSohail321/Sabir-Tailor"
              // demoLink="https://your-demo-link.com" // Optional
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrms}
              isBlog={false}
              title="Human Resource Management System"
              description="A comprehensive Human Resource Management System (HRMS) designed to streamline employee onboarding, attendance, leave tracking, and performance evaluations. Built with Flutter and Firebase, this app supports role-based access for HR, employees, and admins. HR can manage employee records, approve leaves, and view reports, while employees can mark attendance and submit requests. A scalable and secure solution for modern HR operations."
              ghLink="https://github.com/YourGitHubUsername/HRMS-App"
              // demoLink="https://your-demo-link.com" // Optional
            />
          </Col>
          <br></br>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentalease}
              isBlog={false}
              title="Mental Ease – Smart Mental Health Platform"
              description="A comprehensive Flutter-based mental health app that allows users to assess their mental well-being using an AI-powered questionnaire (Random Forest Classifier), book appointments with psychologists (online or in-person), and communicate via real-time chat. Integrates Firebase Authentication, Realtime Database, Stripe split payments, and Agora for video calls. Admin and Psychologist dashboards ensure scalable, secure, and efficient management of services."
              ghLink="https://github.com/NabeelSohail321/Mental-Ease" // 🔁 Replace with actual link
              // demoLink="https://your-demo-link.com" // Optional
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
