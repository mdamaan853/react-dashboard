import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import { BsThreeDots } from "react-icons/bs";
import Applicant from "./common/Applicant";
import Avatar from '@material-ui/core/Avatar';
import CampaignCards from "./common/CampaignCards";
import Card from "@material-ui/core/Card";
import Toolbar from "@material-ui/core/Toolbar";
import ApplicationCard from "./common/ApplicationCard";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Box from "@material-ui/core/Box";
import CircleChart from "./common/Chart";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // background:'#000',
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  avatar:{
  backgroundColor: "#4d4d4d", 
  marginLeft:'10px', 
  marginTop:'10px',
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    background: "#000",
  },
  //   Cards
  smallCards: {
    background: "#2c2c2c",
    border:'1px solid #474747',
    color:'#fff',
    width: 257,
    height: 130,
  },
  chartCard: {
    border:'1px solid #474747',
    color:'#fff',
    width: 520,
    background: "#2c2c2c",
    height: 340,
    marginRight: "10px",
  },
  progressCard: {
    border:'1px solid #474747',
    color:'#fff',
    background: "#2c2c2c",
    width: 260,
    height: 340,
  },
  //   Button
  primary: {
    background: "blue",
  },
  danger: {
    backgroundColor: "red",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const value = 0.66;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["", "", "", ""].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["", "", ""].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Grid container >
          <Grid item xs={7} style={{marginRight:'43px'}}>
           {/* Application card */}
           <ApplicationCard />
            <Box display="flex" flexDirection="row">
              <Box p={1}>
                <Card className={classes.chartCard} ><Typography>Applications Recieved</Typography>
                  <Typography>This Year</Typography>
                  <Typography>This Week</Typography>
                  <Typography>Today</Typography>
                </Card>
              </Box>
              <Box p={1}>
                <Card className={classes.progressCard}>Open Positions By Department
               <BsThreeDots />
          
                <CircleChart />
                </Card>
               
              </Box>
            </Box>
            <CampaignCards />
          </Grid>
          <Grid item xs={4}>
             <Applicant />
        
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
