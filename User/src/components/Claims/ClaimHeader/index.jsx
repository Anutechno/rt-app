import "./index.scss";

const ClaimHeader = ({ brief }) => {
  return (
    <div className="claim-open-header">
      {console.log(brief)}
      {brief == undefined ? (
        ""
      ) : (
        <>
          {!!brief.title ? <h3>{brief.title}</h3> : ""}
          {!!brief.descr ? <p>{brief.descr}</p> : ""}
        </>
      )}
    </div>
  );
};

export default ClaimHeader;
