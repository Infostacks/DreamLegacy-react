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
import Card from "@material-ui/core/Card";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import DescriptionIcon from '@material-ui/icons/Description';
import AnnouncementIcon from '@material-ui/icons/Announcement';
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import MailIcon from '@material-ui/icons/Mail';
import InfoArea from "components/InfoArea/InfoArea.js";
import PeopleIcon from '@material-ui/icons/People';
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

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
    <footer style={{backgroundColor:'#ffba08'}} >
      <div className={classes.container}>
        <div >
        <GridContainer> 
          <GridItem xs={12} sm={12} md={4} >
          <InfoArea 
              title="Contact Us"
              icon={MailIcon}
              color="white"
              vertical>  
          </InfoArea>
          <div style={{textAlign : "left"}}>
            <div><AlternateEmailIcon></AlternateEmailIcon>test@yahoo.com
            <br></br><PhoneIcon></PhoneIcon>+1234567</div>
          </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <InfoArea 
              title="Social"
              icon={PeopleIcon}
              color="white"
              vertical>  
          </InfoArea>
          <div style={{textAlign : "left"}}>
          <div><FacebookIcon></FacebookIcon>Facebook</div>
          <div><TwitterIcon>Twitter</TwitterIcon>Twitter</div>
          </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <InfoArea 
              title="Legal"
              icon={DescriptionIcon}
              color="white"
              vertical>
              
          </InfoArea>
         <div style={{textAlign : "left"}}><AnnouncementIcon></AnnouncementIcon>Terms of Use</div>
          </GridItem>
        </GridContainer>
        </div>
      </div>

    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
