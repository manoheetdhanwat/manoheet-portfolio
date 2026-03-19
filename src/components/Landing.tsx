import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MANOHEET
              <br />
              <span>DHANWAT</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Data Analyst &</h3>
            <h2 className="landing-info-h2" style={{ display: "block", lineHeight: "1.1" }}>
              AI/ML
              <br />
              Engineer
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
