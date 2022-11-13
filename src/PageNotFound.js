import React from "react";
import SadTiger from "./sad-tiger.png";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="pnf-message">
        <center>
          <h1>ERROR 404: Page Not Found</h1>
          <div>
            <br></br>
            <br></br>
            <img id="sadtiger" src={SadTiger} alt="sad tiger"></img>
          </div>
          <br></br>
          <br></br>
          <div>Oh no! It looks like this page does not exist.</div>
          <div className="pnf-footnote">
            UST EDTECH CLOUD CAMPUS TICKETING SYSTEM
          </div>
        </center>{" "}
      </div>
    </div>
  );
};

export default PageNotFound;
