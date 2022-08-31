import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style/Challenges.css";


const Challenges = () => {
  const [apiResponse, setApiResponse] = useState("");
  const [output, setOutput] = useState("");
  const [testResult, setTestResult] = useState(null);

  
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const id = 562;

  const handleCode = (e) => {
    setCode(e.target.value);
  };
  const handleCodeSubmit = () => {
    if (testResult) {
      navigate("/finish");
    }
  };

  let timeSecond = 300;
  let min;
  let sec;


  const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      clearInterval(countDown);
    }
  }, 1000);

  function displayTime(timeSecond) {
      min = Math.floor(timeSecond / 60);
      sec = Math.floor(timeSecond % 60);

      console.log(`
      ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
      `)
    
    }

   
  const runCode = () => {
    fetch("https://api.programiz.pro/api/Challenge/run", {
      method: "POST",

      body: JSON.stringify({
        challengeId: id,

        code: code,
      }),

      headers: {
        "Content-type": "application/json;",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjY2MjUzIiwibmJmIjoxNjYwODgxOTA4LCJleHAiOjE2NjM0NzM5MDgsImlhdCI6MTY2MDg4MTkwOH0.j4un52YXeiL2uSkWgpWR0-RLF9STpa-IhvQ6r3z_IDc",
      },
    })
      .then((response) => response.json())

      .then((json) => {
        const data = json.data;
        console.log(data);
        setApiResponse(data);
        setTestResult(data.testPass);
        console.log("data", data);
        if (testResult) {
          <div>Successful</div>;
        }
        setOutput(data.actualOutput);
      });
  };
  return (
    <div className="main-container">
      <div className="problem-container">
        <h3
          style={{
            textAlign: "left",
          }}
        >
          Program Description
        </h3>
        <div
          style={{
            textAlign: "left",
          }}
        >
          <p>
            Create a program to calculate the simple interest and the final
            amount.
          </p>
          Create a program to calculate the simple interest and the final
          amount. Use the following formula to calculate the interest and final
          amount:
          <em>
            Simple Interest = P * R * T * .01 Final Amount = P + Simple Interest{" "}
          </em>
          <br />#sc
          Here, P is the principal amount, R is the rate of interest and T is
          the time in years. Take float input for principal, rate and time,
          respectively. Calculate the simple interest using the formula and
          store the result in interest. Calculate the final amount using the
          formula and store it in total_sum. Print interest and total_sum in
          separate lines.
        </div>

        <button onClick={handleCodeSubmit} className="button">
          Submit
        </button>
      </div>
      <div className="editor-container">
        <div className="header-container">
          <h4>Write Your Code Here</h4>
          <h4 className="countdown"></h4>
          <button className="compile-button" onClick={() => runCode(code)}>
            Run Code
          </button>
        </div>
        <textarea
          value={code}
          className="code-container"
          onChange={handleCode}
        ></textarea>
        <div className="output-container">
          <h5>Output:</h5>
          {output}{" "}
          {/* {testResult ? (
            <div style={{ color: "var(--success-green)" }}>
              Successful Compilation! You have completed the test.
            </div>
          ) : (
            <div style={{ color: "var(--error-red)" }}>
              Compilation Failed! Try Again.
            </div>
          )} */}
          {testResult && (
            <div style={{ color: "var(--success-green)" }}>
              Successful Compilation! You have completed the test.
            </div>
          )}
          {testResult === false && (
            <div style={{ color: "var(--error-red)" }}>
              Compilation Failed! Try Again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Challenges;
