import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import $ from 'jquery';
import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import { getpools } from 'Services/Pool';
import team3 from "assets/img/faces/kendall.jpg";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(styles);




export default function TeamSection() {
  const classes = useStyles();
  const history = useHistory();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  useEffect(async () => {
    const poolsdata = await getpools();
    console.log('hello result', poolsdata)
    return poolsdata;

  }, [])

  const powerRoute = () => {
    let path1 = "/powerball";
    history.push(path1);

  }

  const megaRoute = () => {
    let path2 = "megamillions";
    history.push(path2);

  }

  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6}>
            <Card style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(214,28,102,1) 0%, rgba(59,26,136,1) 50%, rgba(228,16,92,1) 97%)' }}>
              <CardBody >
                <h2>POWERBALL</h2>
                <h3>Winning Numbers for today:</h3>
                <h4>Current EST Jackpot: </h4>

                <h5 style={{ color: "white", background: "black" }}>$202,000,000</h5>
                <div>
                  <GridContainer>
                    <GridItem style={{ color: "white" }} xs={6}>
                      Cash Value : $157,900,000
                    </GridItem>
                    <GridItem style={{ color: "white" }} xs={6}>
                      Next Draw : Tomorrow
                    </GridItem>
                  </GridContainer>
                </div>
                <Button href="#top" onClick={powerRoute} style={{ background: "black" }} startIcon={<Icon>send</Icon>}>Previous Winning Numbers</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Card style={{ background: 'linear-gradient(to right bottom, #430089, #82ffa1)' }}>
              <CardBody>
                <h2>MEGAMILLIONS</h2>
                <h3>Winning Numbers for today:</h3>
                <img src={require("assets/img/megamillions.JPG")}></img>
                <h4>Current EST Jackpot: </h4>
                <h5 style={{ color: "white", background: "black" }}>$200,000,000</h5>
                <div>
                  <GridContainer>
                    <GridItem style={{ color: "white" }} xs={6}>
                      Cash Value : $155,700,000
                    </GridItem>
                    <GridItem style={{ color: "white" }} xs={6} >
                      Next Draw : Tomorrow
                    </GridItem>
                  </GridContainer>
                </div>
                <Button href="#top" onClick={megaRoute} style={{ background: "black" }} startIcon={<Icon>send</Icon>}>Previous Winning Numbers</Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
