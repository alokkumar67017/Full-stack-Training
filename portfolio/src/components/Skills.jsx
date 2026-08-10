import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Brain
} from "lucide-react";


function Skills() {

  const skills = [

    {
      icon: <Code2 />,
      title: "Frontend",
      items: "HTML • CSS • JavaScript • React"
    },

    {
      icon: <Terminal />,
      title: "Programming",
      items: "Python • JavaScript • Java"
    },

    {
      icon: <Database />,
      title: "Backend & Database",
      items: " MongoDB • REST API • SQL • SQLite"
    },

    {
      icon: <Cloud />,
      title: "Cloud",
      items: "AWS • EC2 • S3 • IAM .route53 • CloudWatch • VPC.loadBalancer.autoScaling"
    },

    {
      icon: <GitBranch />,
      title: "DevOps",
      items: "Git • GitHub • Docker • CI/CD"
    },

    // {
    //   icon: <Brain />,
    //   title: "AI / ML",
    //   items: "YOLO • OCR • Computer Vision"
    // }

  ];


  return (

    <section id="skills" className="skills-section">

      <div className="section-container">

        <p className="section-label">
          MY SKILLS
        </p>


        <h2 className="section-title">
          Technologies I Work With
        </h2>


        <p className="section-description">
          A growing toolkit of technologies I use to
          build applications and solve problems.
        </p>


        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-box"
              key={index}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>


              <h3>
                {skill.title}
              </h3>


              <p>
                {skill.items}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;