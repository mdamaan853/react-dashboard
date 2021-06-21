import React from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { BiUserCircle } from "react-icons/bi";
import { FiMail,FiPhone } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
function Applicant() {
const title={
  textAlign: 'center',
}
const demo={

}

  
  return (
    <div >
    <button className="border-0 outline-0 btn btn-primary mr-4"><IoIosAdd />Add</button>
    <input type="search" placeholder="search for Application here.." style={{border:'0',outline:'0'}} />
    <div className="card shadow border-0 mt-4" style={{height: 'auto',width: '300px'}}>
        <div className="card-body">
        <p variant="h6" gutterBottom style={title}>
          Hello John Bayer,<br /> You have 8 New Applications Today!
        </p>
        <img />
 
    <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center border-0">
  New Applicants <KeyboardArrowRightIcon />
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <BiUserCircle  />Dapibus ac facilisis in<FiPhone />
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <BiUserCircle  /> Morbi leo risus <FiMail />
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>
    </div>
    </div>
    </div>
  );
}

export default Applicant;
