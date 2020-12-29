import React, { useEffect } from "react";
import { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {getMega} from '../../Services/Pool'
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
import {connect} from "react-redux";
import _ from "lodash";
import hero from "../../assets/img/hero.jpg"
import { useHistory } from "react-router-dom";
import * as dataActions from '../../Store/Actions/Index'
import { getMegaData } from '../../Store/Actions/Index'

let primaryColor = "#2e294e";
let wordColor = "#3f566d";
let secColor = "#f46036";
let headingColor ="#c5d86d";
let textColor="white";
let backColor="#2e294e"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);


function States(props) {
  const classes = useStyles();
  const history = useHistory();


    

  const setState = async (data) => {
    await props.setSelectedData(data)
    let statesPath= "/states-page";
    history.push(statesPath)

  
  }

  useEffect(()=>{
    (async() => {
    // await props.getPoolsData();
    // const poolsResult = await getpools();
    // setpools(poolsResult.data)
    await props.getPoolsData();
    await props.getMegaData();
    
    
    // console.log('megadata',megaResult.data)

    

  })();
},[]);

  // useEffect(async () => {
    
  //   const poolsdata = await getMega();
  //   console.log('hello', props.pools &&  props.pools)
  //   // console.log('hello',poolsdata)
  //   let states = _.map(poolsdata.data.s, (state, index) => {
  //     return { label: state.i.sn, abbr: state.i.s, key: index };
  //   });
  //   if (states && !_.isEmpty(states)) {
  //     setStates(states);
  //   }
  //   console.log("states data", states);
  // }, []);

  // const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 90,
          
        }}
        // {...rest}
      />
       <div style={{ backgroundImage: "url(" + hero + ")", paddingTop: "70px", paddingBottom: "70px",textAlign:"center" }}>        
        {props.mega &&
          props.mega.map((y, index) => (
            <Button onClick={()=> setState(y)} style={{ background: secColor, align: "center" }}>
              {y.i.sn}, {y.i.s}
            </Button>
          ))}
      
          {/* <div className={classes.container}>
        {states1 && states1.data && states1.data.s poolsdata.data.s
          states1.map((y, index) => (
            <Button onClick={statesdata} style={{ background: "#22223b", align: "center" }}>
              {y.label}, {y.abbr}
            </Button>
          ))}
        // </div> */}
  </div>
      <Card style={{width:'250px',display:'contents'}}>
       
      </Card>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    pools: state && state.data && state.data.poolsData && state.data.poolsData.data, 
    mega: state && state.data && state.data.megaData && state.data.megaData.data && 
   state.data.megaData.data.s 
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPoolsData:() => dispatch(dataActions.getPoolsData()),
    getMegaData:() => dispatch(dataActions.getMegaData()),
  setSelectedData: (payload) => dispatch(dataActions.setSelectedState(payload))
  
   }

};
// // Exports
export default connect(mapStateToProps, mapDispatchToProps)(States);