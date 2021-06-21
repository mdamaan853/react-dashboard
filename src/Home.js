import React from "react";
import Header from "./common/Header";
import Applicant from "./common/Applicant";
import CampaignCards from "./common/CampaignCards";
import ProgressCards from './common/ProgressCards';
import ApplicationCard from "./common/ApplicationCard";
import { CircularProgressbar } from "react-circular-progressbar";
import CircleChart from "./common/Chart";
import SplineChart from "./common/SplineChart"
import Chart from "./common/Chart"

export default function PersistentDrawerLeft() {
 
  const value = 0.66;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-lg-8">
        <div className="col-md-6">
          <ApplicationCard />
          
          <div className="row">
            <div className="col-lg-8">
            <SplineChart />
            <CampaignCards />
            </div>
            <div className="col-lg-4 mb-5">
              
            <ProgressCards />
            <Chart /> 
            </div>
          </div>
          </div>
        </div>
        <div className=" col-lg-4">
          <Applicant />
        </div>
      </div>
 
       
    </div>
  );
}
