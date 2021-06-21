import React from "react";
import { FiSend } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

const  arrowIcon = {
    color: "blue",
    fontSize: '16px',
    marginBottom: '8px'
}

function CampaignCards() {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-md-6">
          <div className="card border-0 shadow" style={{width:'270px'}}>
            <div className="card-body">
              <p className="mb-5">Refferal and campaign Stats</p>
              <div className="row">
                  <div className="col-md-6">
                      <p className="">Users Reached</p>
                        <FiArrowUpRight style={arrowIcon} />-6352
                        <h3>9334</h3>
                  </div>
                  <div className="col-md-6"><p>Refferals</p><FiArrowUpRight style={arrowIcon} />-483
                  <h3>1934</h3>
                  
                  </div>
                  <button className="btn w-100 btn-primary outline-0 border-0"style={{height: '50px',marginTop:'50px'}}>Pause all Running Campaigns</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow" style={{width:'270px'}}>
            <div className="card-body">
              <p className="text-danger mb-1"> <FiSend style={{fontSize:'30px',}} /> 40 Campaigns sent in total</p>
              <p>4 campaign sent in last month</p>
              <div className="row">
                  <div className="col-md-6">
                    <p>Shares</p><FiArrowUpRight style={arrowIcon} />-4532
                    <h3>1234</h3>
                  </div>
                  <div className="col-md-6">
                      <p>Applications</p><FiArrowUpRight style={arrowIcon} />-345
                      <h3>1374</h3>
                  </div>
                  <button className="w-80 btn btn-danger outline-0 border-0" style={{height: '50px',marginTop:'50px'}}>Pause all Running Campaigns</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignCards;
