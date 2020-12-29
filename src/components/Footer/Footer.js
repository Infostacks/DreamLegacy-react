/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { Icon, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import LockIcon from '@material-ui/icons/Lock';
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import FacebookIcon from '@material-ui/icons/Facebook';
import CreateIcon from '@material-ui/icons/Create';

import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DescriptionIcon from '@material-ui/icons/Description';
import TwitterIcon from '@material-ui/icons/Twitter';
import FeedbackIcon from '@material-ui/icons/Feedback';
import AnnouncementIcon from '@material-ui/icons/Announcement';
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import MailIcon from '@material-ui/icons/Mail';
import MoneyIcon from '@material-ui/icons/Money';
import InfoArea from "components/InfoArea/InfoArea.js";

import PeopleIcon from '@material-ui/icons/People';
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import { Email } from "@material-ui/icons";
let primaryColor = "#2e294e";
let wordColor = "#3f566d";
let secColor = "#f46036";
let headingColor ="#c5d86d";
let textColor="white";
let backColor="#2e294e"
const useStyles = makeStyles(styles);
export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (



    <div xs={12} md={6}style={{backgroundColor:secColor}}>
      <div style={{ display: "flex", color: textColor,whiteSpace:"break-spaces",alignContent:"space-between"}}>
        <Typography style={{marginLeft:"0.5em"}}>Home</Typography><span style={{ color: primaryColor ,marginLeft:"0.5em"}}>|</span>
        <Typography style={{marginLeft:"0.5em"}}>PowerBall</Typography><span style={{ color: primaryColor ,marginLeft:"0.5em"}}>|</span>
        <Typography style={{marginLeft:"0.5em"}}>Megamillions</Typography><span style={{ color: primaryColor ,marginLeft:"0.5em"}}>|</span>
        <Typography style={{marginLeft:"0.5em"}}>Statenumbers</Typography><span style={{ color: primaryColor,marginLeft:"0.5em" ,marginLeft:"0.5em"}}>|</span>
        <Typography style={{marginLeft:"0.5em"}}>About the App</Typography><span style={{ color: primaryColor,marginLeft:"0.5em" }}>|</span>
        <Typography style={{marginLeft:"0.5em"}}>Frequently Asked Questions</Typography><span style={{ color: primaryColor ,marginLeft:"0.5em"}}>|</span>
        <Typography style={{marginLeft:"0.5em"}}>LotteryNews</Typography>
      </div>
   
       <Grid container style={{display:"flex",margin:"2em"}}>
         <Grid item xs={12} md={4} > 
         <div style={{display:"flex",color:"white"}}>
        <CreateIcon style={{color:primaryColor,fontSize:"40"}}/><h4>LEGAL</h4>
        </div>
        <div style={{display:"flex",color:"white"}}>
<AssignmentIcon style={{color:primaryColor}}/><Typography>Terms of Use</Typography>
</div>
<div style={{display:"flex",color:"white"}}>
<LockIcon  style={{color:primaryColor}}/><Typography>Privacy Policy</Typography>
</div>
<div style={{display:"flex",color:"white"}}>
<MoneyIcon  style={{color:primaryColor}}/><Typography>Anti Corruption Policy</Typography>   
</div>
</Grid>
<Grid item xs={12} md={4}>
<div style={{display:"flex",color:"white"}}>
     <PeopleIcon style={{color:primaryColor,fontSize:"50"}}/><h4>Social</h4>
     </div>
        <div style={{display:"flex",color:"white"}}>
<FacebookIcon style={{color:primaryColor}}/><Typography>FaceBook</Typography>
</div>
<div style={{display:"flex",color:"white"}}>
<TwitterIcon  style={{color:primaryColor}}/><Typography>Twitter</Typography>
</div>
<div style={{display:"flex",color:"white"}}>
<InstagramIcon  style={{color:primaryColor}}/><Typography>Instagram</Typography>   
</div>
     </Grid>


<Grid item xs={12} md={4}>
   <div style={{display:"flex",color:"white"}}>
<FeedbackIcon style={{color:primaryColor,fontSize:"50"}}/><h4>CONTACT</h4>
</div>
        <div style={{display:"flex",color:"white"}}>
<Typography>CUSTOMER SERVICE</Typography>
</div>
<p>"admin@gmail.com"</p>
<div style={{display:"flex",color:"white"}}>
<Typography>ADVERTISING</Typography>
</div>
<p>"advertisement@dreamlegacy.com"</p>

</Grid>

     </Grid>
      </div>
     








  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
