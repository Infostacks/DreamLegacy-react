import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import $ from "jquery";
import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import { getpools, getMega } from "Services/Pool";
import team3 from "assets/img/faces/kendall.jpg";
import { Divider, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { array } from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import { LocationDisabledSharp } from "@material-ui/icons";
import * as dataActions from '../../../Store/Actions/Index'
const useStyles = makeStyles(styles);
let primaryColor = "#2e294e";
let wordColor = "#3f566d";
let secColor = "#f46036";
let headingColor ="#c5d86d";
let textColor="white";
let backColor="#2e294e"

function TeamSection(props) {

  const [poolsdata, setpools] = useState("");
  const [megaData, setMega] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const [states1, setStates] = useState();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const powerRoute = () => {
    history.push("/powerball");
  }

  const megaRoute = () => {
    history.push("/megamillions");
   

  }

  useEffect(() => {
    (async () => {
      // await props.getPoolsData();
      // const poolsResult = await getpools();
      // setpools(poolsResult.data)
      await props.getPoolsData();
      await props.getMegaData();

      // const megaData = await getMega();


      console.log('megadata', megaData.data)



      //   let res =megaData && megaData.data && _.map(megaData.data.s,(state, index) => {
      //     return { label: state.i.sn, abbr: state.i.s, key: index};

      // });
      // if (res && !_.isEmpty(res)) {
      //   setStates(res);
      // }
      // console.log('states data', res)

    })();
  }, []);
  // const powerRoute = () => {
  //   let path1 = "/powerball";
  //   history.push(path1);
  // };

  // const megaRoute = () => {
  //   let path2 = "megamillions";
  //   history.push(path2);
  // };

  return (
    <div className={classes.section} style={{ background: primaryColor,textAlign:"center" }}  md={6} xs={12}>
        <div style={{backgroundColor:primaryColor,display:"flex"}}>
        <Grid container style={{textAlign:"-webkit-center"}}>
        <Grid item md={6} xs={12}>
        <Card style={{ background: secColor, width: "30em",textAlign:"center" }}>
              <CardBody lg={4} md={6} xs={12}>
                <h3 style={{ color:primaryColor,fontFamily:"serif" }}><span style={{fontWeight:"600"}}>POWER</span><span style={{color:"white"}}>BALL</span></h3>
                <h4 style={{ color: textColor }}>Winning Numbers for today:</h4>
                <h4 style={{ color: textColor }}>Current EST Jackpot: </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  {props.pools &&
                    props.pools[0].field_winning_numbers.split(',').map((y, index) => (
                      <div class="numbers-ball" style={{
                        backgroundColor:backColor ,
                        width: '35px',
                        height: '35px',
                        borderRadius: '20px',
                        textAlign: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        margin: '10px 8px 10px 0',
                        justifyContent: 'center',
                        fontSize: '19px',
                        fontFamily: 'ProximaNova-Bold',
                        color: textColor,
                      }}>
                        {y}
                      </div>
                    ))}


                </div>
                <div style={{color:textColor}}>
                 
                      Cash Value : $157,900,000
                  </div><div style={{color:textColor}}>
                      Next Draw : Tomorrow
                 
                </div>
                <Button
                  href="#top"
              
                  onClick={powerRoute}
                  style={{ background: backColor, color: textColor, padding: "12px" }}
                  startIcon={<Icon>send</Icon>}
                >
                  Previous Winning Numbers
                </Button>
              </CardBody>
            </Card> 
   </Grid>
   <Grid item md={6} xs={12}>
     <Card style={{ background: secColor, width: "30em",textAlign:"center" ,marginLeft:"1em"}} >
              <CardBody lg={4} md={6} xs={12}>
              <h3 style={{ color:primaryColor,fontFamily:"serif" }}><span style={{fontWeight:"600"}}>MEGA</span><span style={{color:"white"}}>MILLIONS</span></h3>
                <h4 style={{ color: textColor }}>Winning Numbers for today:</h4>

                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  {/* {poolsdata && poolsdata.data.map((data, index) => (
                    <div class="numbers-ball" style={{
                      backgroundColor: '#fff',
                      width: '35px',
                      height: '35px',
                      borderRadius: '20px',
                      textAlign: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      margin: '10px 8px 10px 0',
                      justifyContent: 'center',
                      fontSize: '19px',
                      fontFamily: 'ProximaNova-Bold',
                      color: '#2f3e4a',
                    }
                    }>some number</div>
                  ))} */}
                </div>
                {/* <img src={require("assets/img/megamillions.JPG")}></img> */}
                <h4 style={{ color: textColor }}>Current EST Jackpot: </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  {props.mega && props.mega.map((y, index) => (
                    <div class="numbers-ball" style={{
                      backgroundColor:backColor,
                      width: '35px',
                      height: '35px',
                      borderRadius: '20px',
                      textAlign: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      margin: '10px 8px 10px 0',
                      justifyContent: 'center',
                      fontSize: '19px',
                      fontFamily: 'ProximaNova-Bold',
                      color: textColor,
                    }}>
                      {y}
                    </div>
                  ))}


                </div>
                <div style={{color:textColor}}>
                      Cash Value : $155,700,000
                    </div>
                    <div style={{color:textColor}}>
                      Next Draw : Tomorrow
                
                </div>
                <Button
                  href="#top"
                  onClick={megaRoute}
                  style={{ background: primaryColor, color: textColor, padding: "12px" }}
                  startIcon={<Icon>send</Icon>}
                >
                  Previous Winning Numbers
                </Button>
              </CardBody>
            </Card>
            </Grid>
            </Grid>
            </div>
    
     
     </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    pools: state && state.data && state.data.poolsData && state.data.poolsData.data,
    mega: state && state.data && state.data.megaData && state.data.megaData.data &&
      state.data.megaData.data.s && state.data.megaData.data.s[0] && state.data.megaData.data.s[0].g &&
      state.data.megaData.data.s[0].g[0] && state.data.megaData.data.s[0].g[0].h
      && state.data.megaData.data.s[0].g[0].h[0] && state.data.megaData.data.s[0].g[0].h[0].n
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPoolsData: () => dispatch(dataActions.getPoolsData()),
    getMegaData: () => dispatch(dataActions.getMegaData())
  }

};
// // Exports
export default connect(mapStateToProps, mapDispatchToProps)(TeamSection);
