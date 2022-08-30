import React from 'react';
import { useState } from 'react';

const STEPS = {
  CAMPAIGN_NAME: "Campaign Name",
  SELECT_CHALLENGES: "Select Challenges",
  CREATE_LINK: "Create Link"
};



const ChallengesSelector = ({challengesList, selectedChallenges, setSelectedChallenges}) => {

  const toggleChallengeSelected = (challenge) => {
    alert(challenge.title);
  }

  const tableHeaderRow = <tr><th>Title</th><th>Expected Time</th><th>Difficulty Level</th><th>XP</th><th>View Details</th></tr>;

  const tableData = challengesList &&challengesList.map(challenge => {
    return (<tr>
          <td><input type="checkbox" onChange={() => toggleChallengeSelected(challenge)}></input></td>
          <td>{challenge.title}</td>
          <td>{challenge.expected_time}</td>
          <td>{challenge.difficulty_level}</td>
          <td>{challenge.xp}</td>
          <td><button>View Detail</button></td>
    </tr>)
  });

  return (<table><thead>{tableHeaderRow}</thead><tbody>{tableData}</tbody></table>);
}

const CreateCampaign = ({challenges}) =>
{
    const [selectedChallenges, setSelectedChallenges] = useState([]);
    const [campaignName, setCampaignName] = useState("");
    return (
      <div>
        <h2> Create a Campaign</h2>
        <div>
          <h4>Enter your campaign name</h4>
          <input
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          ></input>
        </div>
        <div>
          <h4>When does your campaign end?</h4>
          <input></input>
            </div>
            <button>GET STARTED</button>
      </div>
    );
    
};
export default CreateCampaign;
