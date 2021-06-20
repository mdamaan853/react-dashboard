import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
    
    smallCards: {
        background: "#000000",
        border:'1px solid #474747',
        color:'#fff',
        width: 257,
        height: 130,
      },
      contentlastChild: {
        // flex: '1 0 auto',
        paddingBottom:'0',
      },
      circularProgressBar: {
          stroke: '#000!important',
      },
      expand:{
          marginLeft:'auto',
      }
}));
function ApplicationCard() {
    const classes = useStyles();
    const value = 0.66;
    return (
        <div>
           
             <Box display="flex" flexDirection="row">
              <Box p={1}>
              <Grid container>
                <Card className={classes.smallCards}>
                    <Grid md={4}>
               
                  Total Applications
                  
                    <Typography variant="h4">  7956</Typography>
                  {/* </CardContent> */}
                  </Grid>
                  <Grid md={6}>
                  <BsThreeDots />
               
                  <div style={{ width: 50, height: 20 ,stroke: '#000'}}>
                  <CircularProgressbar
                   value={value}
                   className={classes.circularProgressBar}
                    maxValue={1}
                    text={`${value * 100}%`}
                
                  />
                  </div>
                  </Grid>
                </Card>
                </Grid>
              </Box>
              <Box p={1}>
              <Grid container>
                <Card className={classes.smallCards}>
                    <Grid md={4}>
               Shortlisted Candidates
                  
                    <Typography variant="h4">  4658</Typography>
                  {/* </CardContent> */}
                  </Grid>
                  <Grid md={6}>
                  <BsThreeDots />
               
                  <div style={{ width: 50, height: 20 ,stroke: '#000'}}>
                  <CircularProgressbar
                   value={value}
                   className={classes.circularProgressBar}
                    maxValue={1}
                    text={`${value * 100}%`}
                
                  />
                  </div>
                  </Grid>
                </Card>
                </Grid>
       
              </Box>
              <Box p={1}>
              <Grid container>
                <Card className={classes.smallCards}>
                    <Grid md={4}>
           Total Applications
                  
                    <Typography variant="h4">  1501</Typography>
                  {/* </CardContent> */}
                  </Grid>
                  <Grid md={6}>
                  <BsThreeDots />
               
                  <div style={{ width: 50, height: 20 ,stroke: '#000'}}>
                  <CircularProgressbar
                   value={value}
                   className={classes.circularProgressBar}
                    maxValue={1}
                    text={`${value * 100}%`}
                    styles={buildStyles({
                        pathColor: `#ff0000, ${value / 100})`,

                    })}
                  />
                  </div>
                  </Grid>
                </Card>
                </Grid>
       
              </Box>
            </Box>
      
        </div>
    )
}

export default ApplicationCard
