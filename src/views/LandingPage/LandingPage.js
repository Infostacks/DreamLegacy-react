import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import hero from "../../assets/img/hero.jpg"
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
let primaryColor = "#17242c";
let wordColor = "#3f566d";
let secColor = "#c6c6c6";

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{ background: primaryColor }}>

      {/* HEADER SECTION */}
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: primaryColor
        }}
        {...rest}
      />

      {/* HEADER SECTION END */}


      {/* HEADING SECTION START */}
      <section xs={12}md={6}>
        <div style={{ backgroundImage: "url(" + hero + ")", paddingTop: "40px", paddingBottom: "40px" }}>


          <h1 style={{ color: "white", fontFamily: "serif", textAlign: "center" }}> Welcome to DreamLegacy!</h1>

        </div>
      </section>

      {/* HEADING SECTION END */}





      <TeamSection />
      {/* <ProductSection /> */}


      <Footer />
    </div>
  );
}
