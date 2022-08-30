import React from 'react';
import { useState, useEffect } from 'react';
import "./Challenges.css";
const Challenges = () =>
{
    const [apiResponse, setApiResponse] = useState("");
    const [output, setOutput ] = useState( "" );
    const [ code, setCode ] = useState( "" );
    const id = 612;
    const handleCode = ( e ) =>
    {
        setCode( e.target.value );
}
    useEffect( () =>
    {
        runCode();
        
    } ,[])
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
            console.log( data );
          setApiResponse(data);

          setOutput(data.actualOutput);
        });
    };
    return (
      <div>
        <div className="code-container">
          #Write Your Code Here
                <textarea value={code} onChange={handleCode}>
                </textarea>
        </div>
            <button onClick={ () => runCode( code ) }>Run Code</button>
            <div>
                {output}
            </div>
      </div>
    );
};
export default Challenges;
