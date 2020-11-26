import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import {Grid} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js"; 
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Divider } from "@material-ui/core";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Powerball(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/powerball1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Powerball</h1>
              <br/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
        <Card style={{background: "beige"}}>
              <CardBody>
                <h2 style={{color : "red"}}>Powerball winning numbers</h2>
                <div>
                <h4>Next Drawing: Tomorrow  </h4>
                <h4>Current Est Jackpot: $202,000,000</h4>
                <h4>Cash Value: $157,900,000</h4>
                </div>
              </CardBody>
            </Card>
            <Divider></Divider>
            <Card style={{background : "beige"}}>
              <CardBody>
                <div>
                    <h1 style={{color : "black"}} >Table Here</h1>
                </div>
              </CardBody>
            </Card> 
            <Divider></Divider>
            <Card style={{background: "beige"}}>
              <CardBody>
                    <h3 style={{color : "red"}}>Prizes and Odds</h3>
                    <h5>All prizes, other than the Grand Prize, are set cash prize amounts, 
                        except in California where prize payout amounts are pari-mutuel and determined by 
                        sales and the number of winners; prize amounts below may also become pari-mutuel in all 
                        jurisdictions in rare circumstances.</h5>                    
                        <img src={require("assets/img/odds.JPG")}></img>
                    <h3 style={{color : "red"}}>Odds when the 10x multiplier is available</h3>
                    <img src={require("assets/img/odds10.JPG")}></img>
                    <h3 style={{color : "red"}}>Odds when the 10x multiplier is not available</h3>
                    <img src={require("assets/img/odds101.JPG")}></img>
                    <h3 style={{color : "red"}}>Prizes</h3>
                    <img src={require("assets/img/prizes.JPG")}></img>
                    <h5 style={{color : "black"}}>There are nine ways to win in Powerball,
                     return to your Powerball retailer or Lottery headquarters for validation of your tickets.</h5>
              </CardBody>
            </Card> 
        </div>
      </div>
      <Footer/>
    </div>
  );
}
