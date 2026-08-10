import {
  GraduationCap
} from "lucide-react";

function Education() {
  return (
    <section
      id="education"
      className="education-section"
    >

      <div className="section-container">

        <p className="section-label">
          EDUCATION
        </p>

        <h2 className="section-title">
          My Education
        </h2>


        {/* 10th */}
        <div className="education-card">

          <div className="education-icon">
            <GraduationCap size={35} />
          </div>

          <div className="education-content">

            <p className="education-year">
              2018 - 2019
            </p>

            <h3>
              10th Standard
            </h3>

            <h4>
              High school Barha (BSEB)
            </h4>

            <p>
              Bihar, India
            </p>

          </div>

        </div><br />


        {/* Diploma */}
        <div className="education-card">

          <div className="education-icon">
            <GraduationCap size={35} />
          </div>

          <div className="education-content">

            <p className="education-year">
              2019 - 2022
            </p>

            <h3>
              Diploma in Electrical Engineering
            </h3>

            <h4>
              Government Polytechnic College, Sheikhpura
            </h4>

            <p>
              Bihar, India
            </p>

          </div>

        </div><br />


        {/* B.Tech */}
        <div className="education-card">

          <div className="education-icon">
            <GraduationCap size={35} />
          </div>

          <div className="education-content">

            <p className="education-year">
              2024 - 2027
            </p>

            <h3>
              B.Tech in Computer Engineering
            </h3>

            <h4>
              Marwadi University
            </h4>

            <p>
              Gujarat, India
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;