import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [subjectCount, setSubjectCount] = useState(0);
  const [marks, setMarks] = useState([]);
  const [maxMarks, setMaxMarks] = useState(100);
  const [resultType, setResultType] = useState("percentage");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleMarksChange = (index, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = Number(value);
    setMarks(updatedMarks);
    setResult(null);
    setError("");
  };

  const calculateResult = () => {
    // Validation
    if (subjectCount <= 0) {
      setError("Please enter number of subjects.");
      return;
    }

    if (!maxMarks || maxMarks <= 0) {
      setError("Marks out of must be greater than 0.");
      return;
    }

    if (marks.length !== subjectCount) {
      setError("Please enter marks for all subjects.");
      return;
    }

    for (let mark of marks) {
      if (mark < 0 || mark > maxMarks || isNaN(mark)) {
        setError(`Marks must be between 0 and ${maxMarks}.`);
        return;
      }
    }

    const totalObtained = marks.reduce((sum, m) => sum + m, 0);
    const totalPossible = subjectCount * maxMarks;

    const percentage = (totalObtained / totalPossible) * 100;
    const cgpa = percentage / 10;

    let grade = "";

if (percentage >= 90) grade = "A+";
else if (percentage >= 80) grade = "A";
else if (percentage >= 70) grade = "B+";
else if (percentage >= 60) grade = "B";
else if (percentage >= 50) grade = "C";
else if (percentage >= 40) grade = "D";
else grade = "F";


    setResult({
      totalObtained,
      totalPossible,
      percentage: percentage.toFixed(2),
      cgpa: cgpa.toFixed(2),
      grade,
    });

    setError("");
  };

  return (
    <section className="calculator" id="calculator">
      <h2 className="calculator-title">Grade Calculator</h2>

      {/* Number of Subjects */}
      <div className="subject-selector">
        <label>Number of Subjects</label>
        <input
          type="number"
          min="1"
          max="10"
          value={subjectCount}
          onChange={(e) => {
            const count = Number(e.target.value);
            setSubjectCount(count);
            setMarks(Array(count).fill(0));
            setResult(null);
            setError("");
          }}
        />
      </div>

      {/* Marks Out Of */}
      <div className="subject-selector">
        <label>Marks Out Of</label>
        <input
          type="number"
          min="1"
          value={maxMarks}
          onChange={(e) => {
            setMaxMarks(Number(e.target.value));
            setResult(null);
            setError("");
          }}
        />
      </div>

      {/* Marks Inputs */}
      <div className="marks-inputs">
        {Array.from({ length: subjectCount }).map((_, index) => (
          <input
            key={index}
            type="number"
            min="0"
            max={maxMarks}
            placeholder={`Subject ${index + 1} Marks`}
            onChange={(e) => handleMarksChange(index, e.target.value)}
          />
        ))}
      </div>

      {/* Result Type */}
      <div className="result-type">
        <label>
          <input
            type="radio"
            checked={resultType === "percentage"}
            onChange={() => setResultType("percentage")}
          />
          Percentage
        </label>

        <label>
          <input
            type="radio"
            checked={resultType === "cgpa"}
            onChange={() => setResultType("cgpa")}
          />
          CGPA
        </label>
      </div>

      <button className="calculate-btn" onClick={calculateResult}>
        Calculate
      </button>

      {/* Error Message */}
      {error && <p className="error-text">{error}</p>}

      {/* Result Box */}
      {result && (
      <div className="result-wrapper">
        <div className="result-box">
          <h3>Result</h3>

          <p>
            {result.totalObtained} / {result.totalPossible}
          </p>

          {resultType === "percentage" ? (
            <p>{result.percentage}%</p>
          ) : (
            <p>{result.cgpa} CGPA</p>
          )}
    
        </div>
      )}
      {result && (
  <div className="grade-box">
    <h3>Grade : </h3>
    <p>{result.grade}</p>
  </div>
          </div>

)}

    </section>
  );
}

export default Calculator;
