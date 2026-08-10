import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


function Portfolio() {

  const projects = [

    {
      number: "01",
      title: "Vehicle Accident Detection",
      description:
        "AI-based system for vehicle accident detection and number plate recognition using YOLO and OCR.",
      tech:
        "Python • YOLO • PaddleOCR",
      github: "#"
    },

    {
      number: "02",
      title: "Intelligent Exam Scheduler using Metaheuristic Algorithms",
      description:
        "Flask-based intelligent system that generates optimized examination schedules.",
      tech:
        "Python • Flask • SQLite • GA • PSO",
      github: "#"
    },

    {
      number: "03",
      title: "AI Doubts Solver",
      description:
        "AI-powered application that helps students solve mathematical questions using image capture and OCR.",
      tech:
        "Flutter • Firebase • AI • OCR",
      github: "#"
    },
     {
      number: "04",
      title: "Save & Expense Tracker",
      description:
        "Save & Expense Tracker: A Flutter-based mobile app to track income, expenses, and savings with a simple and user-friendly interface.",
      tech:
        "Flutter • SQLite •  API • Firebase",
      github: "#"
    },

  ];


  return (

    <section
      id="portfolio"
      className="portfolio-section"
    >

      <div className="section-container">


        <p className="section-label">
          PORTFOLIO
        </p>


        <h2 className="section-title">
          Featured Projects
        </h2>


        <p className="section-description">
          Some of the projects I've worked on while
          learning and building real-world solutions.
        </p>


        <div className="projects-grid">


          {projects.map((project) => (

            <div
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="project-tech">
                {project.tech}
              </div>


              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >

                  <GithubIcon size={18} />

                  GitHub

                </a>


                <a href="#">

                  <ExternalLink size={18} />

                  Demo

                </a>

              </div>

            </div>

          ))}


        </div>

      </div>

    </section>
  );
}


export default Portfolio;