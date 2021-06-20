import React from "react";
import Card from "@material-ui/core/Card";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BiUserCircle } from "react-icons/bi";
import { FiMail,FiPhone } from "react-icons/fi";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor:'#2c2c2c;',
  },
  applicantsCard: {
    width: 500,
    height: 600,
    backgroundColor:'#2c2c2c;',
  },
  demo: {
    backgroundColor: "#2c2c2c;",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  userAvatar:{
      fontSize:'40px',
      color:'#fafafa;',
  },
  title:{
      color:'#fff',
      textAlign: "center",
  }
}));
function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

function Applicant() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div className={classes.root}>
      <Card className={classes.applicantsCard}>
        <Avatar style={{backgroundColor: "#4d4d4d", marginLeft:'10px', marginTop:'10px'}}><ArrowForwardIcon /></Avatar>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Hello John Bayer,<br /> You have 8 New Applications Today!
        </Typography>
        <img />
        
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
         New Applicants <Avatar style={{backgroundColor: "#4d4d4d"}}> <KeyboardArrowRightIcon /></Avatar>
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar className={classes.userAvatar}>
                    <BiUserCircle  />
                 </ListItemAvatar>
                <ListItemText
                    primary="Amisha"
                    secondary={secondary ? 'Secondary text' : null}
                    style={{color:"#fff"}}
                  />
                 <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="mail">
                    <Avatar style={{backgroundColor: "#4d4d4d"}}>
                  
                   <FiMail />
                   </Avatar>
                  
                    </IconButton>
                  </ListItemSecondaryAction>
                  {/* <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                    <Avatar style={{backgroundColor: "#4d4d4d"}}>
                   <FiPhone />
                   </Avatar>
                    </IconButton>
                        </ListItemSecondaryAction> */}
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </Grid>
      </Card>
    </div>
  );
}

export default Applicant;
