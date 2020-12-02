import React, { useEffect } from "react";
import { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import { Grid } from "@material-ui/core";
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
import _ from "lodash";
import { getpools } from "Services/Pool";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function States(props) {
  const classes = useStyles();
  const [states1, setStates] = useState();

  useEffect(async () => {
    const poolsdata = await getpools();
    let states = _.map(poolsdata[0].data.s, (state, index) => {
      return { label: state.i.sn, abbr: state.i.s, key: index };
    });
    if (states && !_.isEmpty(states)) {
      setStates(states);
    }
    console.log("states data", states);
  }, []);

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
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/US-Map.jpg")}>
        <div className={classes.container}></div>
      </Parallax>
      <Card>
        {states1 &&
          states1.map((y, index) => (
            <Button style={{ background: "red", align: "center" }}>
              {y.label}, {y.abbr}
            </Button>
          ))}
      </Card>
      <Footer />
    </div>
  );
}
