import React from 'react';
import { useState } from 'react';

const CreateCampaign = () =>
{
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
            <button className>GET STARTED</button>
      </div>
    );
    
};
export default CreateCampaign;
