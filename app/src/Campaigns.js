import React from "react";

const CampaignList = ({ db, setDb, loading }) => {
  if (loading) return <div>Loading challenges list ...</div>;

  const campaigns = db.campaigns.map((campaign, idx) => {
    return (
      <tr>
        <td> {campaign.id}</td>
        <td> {campaign.title}</td>
        <td> {campaign.expiring_on}</td>
        <td>
          <Link to="/results">
            <button>View Detail</button>
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
      <th>View Detail</th>
    </tr>
  );

  return (
    <>
      {heading}
      <button> Create a new campaign </button>
      <table>
        <thead>{tableHeaderRow}</thead>
        <tbody>{campaigns}</tbody>
      </table>{" "}
    </>
  );
};
export default CampaignList;
