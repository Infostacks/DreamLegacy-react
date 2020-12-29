import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// @material-ui/icons
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import hero from "../../assets/img/hero.jpg"
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
import { connect } from "react-redux";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Divider } from "@material-ui/core";
import * as dataActions from '../../Store/Actions/Index'

const dashboardRoutes = [];
let primaryColor = "#2e294e";
let wordColor = "#3f566d";
let secColor = "#f46036";
let headingColor ="#c5d86d";
let textColor="white";
let backColor="#2e294e"

// const useStyles = makeStyles(styles);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: primaryColor,
    color: textColor,
  },
  body: {
    fontSize: 14,
    color: secColor,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: primaryColor,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    minWidth: 700,
    minHeight: '20em',
  },
});




function Mega(props) {
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    (async () => {
      // await props.getPoolsData();
      // const poolsResult = await getpools();
      // setpools(poolsResult.data)
      await props.getPoolsData();
      await props.getMegaData();


      // console.log('megadata',megaResult.data)



    })();
  }, []);


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


      {/* MAIN HEADING SECTION */}
      <section>
        <div style={{ backgroundImage: "url(" + hero + ")", paddingTop: "40px", paddingBottom: "40px" }}>

          <h1 style={{ color: textColor, textAlign: 'center', fontWeight: '1000', fontFamily: "serif" }}
            lg={4} md={6} xs={12}>Megamillions Winning Numbers</h1>


        </div>
      </section>

      {/* MAIN HEADING SECTION END */}


      {/* CARD SECTION START */}
<section>
  
        <div style={{backgroundColor:primaryColor,display:"flex"}}>
        <Grid container style={{display:"flex",textAlign:"center"}}>
        <Grid item md={4} xs={12}>
          <Card style={{ background: secColor, width: "20em",marginLeft:"2em" }} lg={4} md={6} xs={12}>
         
            <CardBody lg={4} md={4} xs={12}>



              <h4 style={{ color: textColor ,fontFamily: "serif"}} >Next Drawing
              </h4>
              <div style={{ color: textColor }} >
                <h3 style={{ wordSpacing: '50px',fontFamily: "serif" }} >{props.mega}</h3>
              </div>
            </CardBody>
          
          </Card>
          </Grid>
          <Grid item md={4} xs={12}>
          <Card style={{ background: secColor, width: "20em",textAlign:"center",marginLeft:"2em" }} >
            <CardBody>

              <div lg={4} md={6} xs={12}>
                <h4 style={{ color: textColor,fontFamily: "serif" }} >Current EST Jackpot</h4>
                <h3 style={{ wordSpacing: '5em', color: textColor ,fontFamily: "serif"}} >$310,000,000</h3>
              </div>
            </CardBody>
          </Card>
         </Grid>
         <Grid item md={4} xs={12}>
          <Card style={{ background: secColor, width: "20em",textAlign:"center",marginLeft:"2em" }} lg={4} md={6} xs={12}>
            <CardBody>

              <div>
                <h4 style={{ color: textColor,fontFamily: "serif" }} >Cash Value</h4>
                <h3 style={{ wordSpacing: '5em', color: textColor ,fontFamily: "serif"}} >$238,000,000</h3>
              </div>
            </CardBody>
          </Card>
          </Grid>
          </Grid>
          </div>
</section>


{/* TABLE SECTION START */}
<section>
  
          <Card style={{ background: secColor,textAlign:"-webkit-center",marginTop:"0em" }} lg={4} md={6} xs={12}>
            <CardBody lg={4} md={6} xs={12}>
              <div>

                <TableContainer component={Paper} lg={4} md={6} xs={12}>
                  <Table className={classes.table} aria-label="customized table" >
                    <TableHead >
                      <TableRow style={{ color: '#ffbe0b' }} lg={4} md={6} xs={12}>
                        <StyledTableCell >LATEST NUMBERS</StyledTableCell>
                        <StyledTableCell align="right" lg={4} md={6} xs={12}>Jackpot</StyledTableCell>
                        <StyledTableCell align="right" lg={4} md={6} xs={12}>Cash Values</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody >
                      {props.tdata &&
                        props.tdata.map((y, index) => (
                          <StyledTableRow  >
                            <StyledTableCell component="th" scope="row" >
                              {y.d}
                              <grid style={{ marginLeft: "100px" }}></grid>
                              {y.n &&
                                y.n.map((number, index) => (
                                  < div class="numbers-ball" style={{
                                    backgroundColor: secColor,
                                    width: '35px',
                                    height: '35px',
                                    borderRadius: '20px',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    display: 'inline-flex',
                                    margin: '10px 8px 10px 0',
                                    justifyContent: 'center',
                                    fontSize: '19px',
                                    fontFamily: 'ProximaNova-Bold',
                                    color: 'white',
                                  }}>
                                    {number}
                                  </div>
                                ))}
                            </StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right" ></StyledTableCell>
                          </StyledTableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </CardBody>
          </Card>
          
</section>
          {/* TABLE SECTION END */}



{/* BUTTON SECTION START */}

          <Card style={{ background: secColor, alignItems: "center",marginBottom:"0em" }} >
            <CardBody >
              <div>
                <Button style={{ backgroundColor:primaryColor }}>Past Winning Numbers</Button>
              </div>   <div>
                <Button style={{ backgroundColor: primaryColor, minWidth: "-webkit-fill-available" }}>Prizes and ODDS</Button>

              </div>
            </CardBody>
          </Card>
          {/* BUTTON SECTION END */}


       
      <Footer />
    </div>
  );
}


const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    mega: state && state.data && state.data.megaData && state.data.megaData.data &&
      state.data.megaData.data.u,
    tdata: state && state.data && state.data.megaData && state.data.megaData.data &&
      state.data.megaData.data.s && state.data.megaData.data.s[0] && state.data.megaData.data.s[0].g && state.data.megaData.data.s[0].g[0] &&
      state.data.megaData.data.s[0].g[0].h
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPoolsData: () => dispatch(dataActions.getPoolsData()),
    getMegaData: () => dispatch(dataActions.getMegaData()),
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(Mega);
