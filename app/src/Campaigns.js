import React from "react";
import "./style/Campaign.css";

const CampaignList = ({ db, setDb, loading }) => {
  if (loading) return <div>Loading challenges list ...</div>;

  const campaigns = db.campaigns.map((campaign, idx) => {
    return (
      <tr>
        <td> {campaign.id}</td>
        <td> {campaign.title}</td>
        <td> {campaign.expiring_on}</td>
        <td>
          <button>View Detail</button>
        </td>
      </tr>
    );
  });
  const heading = <h2> My Campaign</h2>;
  const tableHeaderRow = (
    <tr>
      <th>S.N</th>
      <th>Title</th>
      <th>Expiring On</th>
      <th>View Detail</th>
    </tr>
  );

  return (
    <>
      <div className="campaign-container">
        {heading}
        <button> Create a new campaign </button>
        <table>
          <thead>{tableHeaderRow}</thead>
          <tbody>{campaigns}</tbody>
        </table>{" "}
      </div>
    </>
  );
};
export default CampaignList;
