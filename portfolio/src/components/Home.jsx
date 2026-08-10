import {
  MapPin,
  GraduationCap,
  Coffee,
  Download,
  ArrowRight,
  Mail,
  Code2,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function Home() {
  const goToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* LEFT SIDE: Content & Info */}
        <div className="home-content">
          {/* <div className="availability">
            
           
          </div> */}

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-name">Alok Kumar</span> <span className="wave"></span>
          </h1>

          <h2 className="hero-subtitle">
            
            MERN Stack Developer & <span>AWS Devops</span>
          </h2>

          <p className="hero-description">
           Build modern, responsive web applications using MongoDB, Express.js, React, and Node.js with scalable and efficient full-stack solutions.
          </p>
          <p className="hero-description">
            Deploy and manage applications on AWS using cloud services, CI/CD, Docker, Git, and DevOps practices for reliable and scalable infrastructure.
          </p>

          <div className="hero-info">
            <div className="info-card">
              <MapPin size={20} />
              <span>Gujarat, India</span>
            </div>

            <div className="info-card">
              <GraduationCap size={20} />
              <span>Marwadi University</span>
            </div>

           
          </div>

          <div className="hero-buttons">
            <button className="explore-button" onClick={goToPortfolio}>
              <span>Explore My Work</span>
              <ArrowRight size={20} />
            </button>

            <button className="contact-hero-button" onClick={goToContact}>
              <Mail size={18} />
              <span>Get In Touch</span>
            </button>

            <a href="/resume.pdf" download className="download-button" title="Download Resume">
              <Download size={18} />
              <span>CV</span>
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub Profile">
              <GithubIcon size={20} />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" title="LinkedIn Profile">
              <LinkedinIcon size={20} />
            </a>

            <a href="mailto:alok.kumar@example.com" title="Send Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Profile Image with Modern Ring & Badges */}
        <div className="profile-area">
          <div className="profile-backdrop"></div>
          
          <div className="profile-ring">
            <img
              src="/profile.jpg"
              alt="Alok Kumar"
              className="profile-image"
              onError={(e) => {
                // Fallback avatar generator if profile image fails to load
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=Alok+Kumar&background=0D8ABC&color=fff&size=500";
              }}
            />
          </div>

         {/* / FLOATING BADGES
          <div className="floating-card top-card">
            <Code2 size={20} className="badge-icon-cyan" />
            
          </div> */}
{/* 
          <div className="floating-card bottom-card">
            <Sparkles size={20} className="badge-icon-purple" />
            <span>AI & Web Solutions</span>
          </div> */}
{/* 
          <div className="floating-card extra-card">
            <Globe size={18} className="badge-icon-green" />
            <span>Full-Stack Engineer</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Home;