import React from "react";
import { Link } from "react-router-dom";
import "./style/Campaign.css";
import "./style/App.css";

const CampaignList = ({ db, setDb, loading }) => {
  if (loading) return <div className="loader">Loading challenges list ...</div>;

  const campaigns = db.campaigns.map((campaign, idx) => {
    return (
      <tr>
        <td> {campaign.id}</td>
        <td> {campaign.title}</td>
        <td> {campaign.expiring_on}</td>
        <td>
          <Link to="/results">
            <button className="view-button">View Detail</button>
          </Link>
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
    </tr>
  );

  return (
    <>
      <div className="campaign-container">
        {heading}
        <Link className="flex-center" to="/create-campaign">
          <button className="button"> Create a new campaign </button>
        </Link>
        <table className="campaign-table">
          <thead className="campaign-table-head">{tableHeaderRow}</thead>
          <tbody className="campaign-table-body">{campaigns}</tbody>
        </table>{" "}
      </div>
    </>
  );
};
export default CampaignList;
