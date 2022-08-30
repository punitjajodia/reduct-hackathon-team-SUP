import React from "react";
import { useState } from "react";

const STEPS = {
  CAMPAIGN_NAME: "Campaign Name",
  SELECT_CHALLENGES: "Select Challenges",
  CREATE_LINK: "Create Link",
};

const ChallengesSelector = ({
  challengesList,
  selectedChallenges,
  setSelectedChallenges,
}) => {
  const toggleChallengeSelected = (challenge) => {
    alert(challenge.title);
  };

  const tableHeaderRow = ( <tr><th>Selection</th><th>Title</th><th>Expected Time</th><th>Difficulty Level</th><th>XP</th><th>View Details</th></tr>);

  const tableData =
    challengesList &&
    challengesList.map((challenge) => {
      return (
        <tr>
          <td>
            <input
              type="checkbox"
              onChange={() => toggleChallengeSelected(challenge)}
            ></input>
          </td>
          <td>{challenge.title}</td>
          <td>{challenge.expected_time}</td>
          <td>{challenge.difficulty_level}</td>
          <td>{challenge.xp}</td>
          <td>
            <button>View Detail</button>
          </td>
        </tr>
      );
    });

  return (
    <table>
      <thead>{tableHeaderRow}</thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};


const CreateCampaign = ({ challenges }) => {
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [campaignName, setCampaignName] = useState("");
  const [currentStep, setCurrentStep] = useState(STEPS.CAMPAIGN_NAME);
  const heading = <h2> Create a Campaign</h2>;
  const handleNextStep = () => {
    setCurrentStep(STEPS.CREATE_LINK);
    navigator.clipboard.writeText('http://localhost:3000/instructions');
  }
  switch (currentStep) {
    case STEPS.CAMPAIGN_NAME:
      return (
        <>
          {heading}
          <h3>Enter campaign name</h3>
          <input
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          ></input>
          <button onClick={() => setCurrentStep(STEPS.SELECT_CHALLENGES)}>
            Go to Next Step
          </button>
        </>
      );
    case STEPS.SELECT_CHALLENGES:
      return (
        <>
          {heading}
          <h3>Select Challenges for </h3>
          <ChallengesSelector
            challengesList={challenges}
            selectedChallenges={selectedChallenges}
            setSelectedChallenges={setSelectedChallenges}
          ></ChallengesSelector>
          <button onClick={() => handleNextStep()}>
            Go to Next Step
          </button>
        </>
      );
    case STEPS.CREATE_LINK:
      return (
        <>
          {heading}
          <h3>Link Copied </h3>
          Following challenges are selected for your campaign. You can now use
          the generated link to send to your list of candidates.
        </>
      );
    default:
      return <div>Something is wrong</div>;
  }
};
export default CreateCampaign;
