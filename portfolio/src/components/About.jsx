import {
  User,
  Code2,
  Server,
  Cloud
} from "lucide-react";


function About() {

  return (

    <section id="about" className="about-section">

      <div className="section-container">


        <p className="section-label">
          ABOUT ME
        </p>

        <h2 className="section-title">
         Full-Stack MERN Developer &
          <span> AWS DevOps </span>
        </h2>

        <div className="about-grid">

          <div className="about-text">

            <div className="about-icon">
              <User size={25} />
            </div>

            <p>
              I'm <strong>Alok Kumar</strong>, a Computer Engineering student & passionate learner specializing in <strong>MERN Stack Web Development</strong>, <strong>AWS Cloud Computing</strong>, and <strong>DevOps Engineering</strong>.
            </p>

            <p>
              I build full-stack web applications using MongoDB, Express, React, and Node.js, while automating deployment pipelines and managing scalable cloud infrastructure on AWS using Docker & CI/CD.
            </p>

            <p>
              My goal is to bridge software development with cloud automation, delivering robust, high-availability digital solutions.
            </p>

          </div>

          <div className="about-skills">

            <div className="about-box">
              <Code2 />
              <h3>MERN Stack</h3>
              <p> Html,css,javascript,React.js, Node.js, Express.js, MongoDB, </p>
            </div>

            <div className="about-box">
              <Cloud />
              <h3>AWS Cloud</h3>
              <p>EC2, S3, IAM, VPC, LoadBalancer, CloudWatch, Route53</p>
            </div>

            <div className="about-box">
              <Server />
              <h3>DevOps & Tools</h3>
              <p>Docker, Git & GitHub, CI/CD Pipelines, Linux</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;