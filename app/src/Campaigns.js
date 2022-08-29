import React from "react";

const CampaignList = ({ db, setDb, loading }) => {
  if (loading) return <div>Loading your campaigns...</div>;

  const campaigns = db.campaigns.map((campaign, idx) => {
    return (
      <div className="c-table">
        <table className="campaign-table">
            <tr>
              <td> {campaign.id}</td>
              <td>Campaign {campaign.title}</td>
              <td> {campaign.expiring_on}</td>
            </tr>
        </table>
      </div>
    );
  } );
  

  return (
    <div>
      <h3>My campaigns</h3>
      <button onclick = "" className="">Create Campaign</button>
        <table className="campaign-table">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Title</th>
              <th>Expires On</th>
            </tr>
          </thead>
        </table>
      <div>{campaigns}</div>
    </div>
  );
};
export default CampaignList;
