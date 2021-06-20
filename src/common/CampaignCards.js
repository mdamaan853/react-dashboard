import React from 'react'
import {Typography,Box,Card} from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BsThreeDots } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      // background:'#000',
    },
    refferalCard: {
        width:'900'
    }
 
  }));
  
function CampaignCards() {
    const classes = useStyles();
    return (
        <div>
            <Typography>Refferals and Campaign Stats</Typography>
            
          
                <Card className={classes.refferalCard} ><Typography>Applications Recieved</Typography>
                  <Typography>This Year</Typography>
                  <Typography>This Week</Typography>
                  <Typography>Today</Typography>
                </Card>
         
            
                <Card className={classes.progressCard}>Open Positions By Department
               <BsThreeDots />
            </Card>
               
            
        </div>
    )
}

export default CampaignCards
