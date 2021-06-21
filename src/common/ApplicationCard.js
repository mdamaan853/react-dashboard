import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FiArrowUpRight } from "react-icons/fi";

const  arrowIcon = {
  color: "#800080",
  fontSize: '16px',
  marginBottom: '8px'
}
function ApplicationCard() {
    const value = 0.66;
    return (
        <div>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                <div className="card shadow border-0 mb-4 mt-5" style={{height: 'auto',width: '300px'}}>
                <div className="card-body">
                <p>Total Applications</p>
                <div className="row">

                  <div className="col-md-7">
                  <h4 className="">9471</h4>
                  <FiArrowUpRight style={arrowIcon} />-483
                  </div>
                  <div className="col-md-3">
                    <BsThreeDots />
                  <div style={{ width: 50, height: 20 ,stroke: '#000'}}>
                  <CircularProgressbar
                   value={value}
                  //  className={classes.circularProgressBar}
                    maxValue={1}
                    text={`${value * 100}%`}
                  />
                  </div>
                  </div>
                </div>
                 
                 
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                </div>
              </div>
              </div>
              </div>
            </div>
        </div>
    )
}

export default ApplicationCard
