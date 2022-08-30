import React from "react";
import { Link } from "react-router-dom";
const InstructionPage = () =>
{
    return (
      <div>
        <h3> You’re about to attempt a series of challenge! </h3> <br /> 
        Here are a few instructions you can quickly go through before you begin
        the test. 
        <br /> The test will judge your ability to write logical code. 
        <br /> Please ensure that you have a stable internet connection. In case of internet issues, the decision taken by the team will be final. 
        <br /> Please give the test from one of the following browsers: Google Chrome, Microsoft Edge, Mozilla Firebox.
        <br /> 
        <Link to= '/challenge'>
        <button> BEGIN </button>
        </Link>
      </div>
    );
};
export default InstructionPage;