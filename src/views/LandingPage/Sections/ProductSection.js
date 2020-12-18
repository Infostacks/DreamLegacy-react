import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const history = useHistory();

const signUpRoute = () => {
  let path1= "/signup";
  history.push(path1);

}

const logInRoute = () => {
  let path2= "/login";
  history.push(path2);

}
  return (
    <div className={classes.section} style={{ color: "white", background: "#6a040f" }}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{color:'#f4a261'}}>About us!</h2>
          <h5  style={{color:'#f4a261'}} className={classes.description}>
            We are here to provide you with a one-stop location for all your lotto needs. 
            Enter your Mega Millions and Powerball tickets into DreamLegacy for storage and review. 
            Once your tickets are entered, you'll be able to easily compare your numbers with those drawn numbers.
            It's easy and free!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} style={{color:'f4a261'}}>
            <InfoArea
              title="Sign Up"
              description="Sign up with your email address and start playing!"
              icon={PersonAddIcon}
              color="#f4a261"
              vertical
            />
            <Button href="#top" onClick={signUpRoute} color="white">SignUp</Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} style={{color:'f4a261'}}>
            <InfoArea
              title="Already a User?"
              description="Log in and select the number for your daily lucky draw"
              icon={VerifiedUser}
              color="#f4a261"
              vertical
            />
            <Button href="#top" onClick={logInRoute} color="white">LogIn</Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} style={{color:'f4a261'}}>
            <InfoArea
              title="Fingerprint"
              description="All the information that you provided is secured.This is our guarentee"
              icon={Fingerprint}
              color="#f4a261"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
