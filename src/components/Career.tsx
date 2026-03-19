import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Intern</h4>
                <h5>EdiGlobe, Bengaluru</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed 10+ AI/ML tasks spanning data classification, pattern recognition, and intelligent automation. 
              Demonstrated strong analytical thinking and communication within an agile team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data-Driven Content Editor</h4>
                <h5>Retrix.in, Remote</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Produced 50+ analytics-backed content pieces; deployed AI writing and data tools to cut production time by 30% and measurably improve engagement metrics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Startech Infotech, Nashik</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered 15+ structured chatbot response flows using rule-based AI and NLP; delivered all ML assignments on time with 100% completion rate.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Web Dev Trainee</h4>
                <h5>Calibers-InfoTech, Nashik</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built 3 dynamic web applications in HTML, CSS, PHP, and MySQL; earned MSBTE-recognized certification in full-stack development fundamentals.
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – AI & Machine Learning</h4>
                <h5>Sandip University, Nashik</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Expected graduation in May 2026. Consistent focus on core Data Science, Machine Learning, and Software Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma – Computer Science</h4>
                <h5>MET League of Colleges, Mumbai</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built strong fundamentals in programming, database management, and system architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
