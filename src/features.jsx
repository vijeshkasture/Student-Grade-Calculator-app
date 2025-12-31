import "./features.css";
import accurateIcon from "./assets/accurate.png";
import simpleIcon from "./assets/simple.png";
import performanceIcon from "./assets/performance.png";
import errorIcon from "./assets/error.png";

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
          <img src={accurateIcon} alt="Accurate Calculation" />
        {/* <h3>Accurate Calculation</h3> */}
        <p>
          Automatically calculates total marks, percentage, and grades with
          precision.
        </p>
      </div>

      <div className="feature-card">
        <img src={simpleIcon} alt="Simple Interface" />
        {/* <h3>Simple Interface</h3> */}
        <p>
          Clean and easy-to-use layout that allows quick input and clear results.
        </p>
      </div>

      <div className="feature-card">
        <img src={performanceIcon} alt="Performance Analysis" />
        {/* <h3>Performance Analysis</h3> */}
        <p>
          Helps students understand their academic performance effectively.
        </p>
      </div>

      <div className="feature-card">
        <img src={errorIcon} alt="Error Reduction" />
        {/* <h3>Error Reduction</h3> */}
        <p>
          Minimizes manual calculation errors during grade evaluation.
        </p>
      </div>
    </section>
  );
}

export default Features;
