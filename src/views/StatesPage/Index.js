import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
// @material-ui/icons
import hero from "../../assets/img/hero.jpg"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import * as dataActions from '../../Store/Actions/Index'
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Grid } from "@material-ui/core";

const dashboardRoutes = [];
// Sections for this page
let primaryColor = "#2e294e";
let wordColor = "#3f566d";
let secColor = "#f46036";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: primaryColor,
    color: wordColor,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: wordColor,
    },
  },
}))(TableRow);

function createData(name, calories) {
  return { name, calories };
}



const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});








function StatesPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  // useEffect(async () => {

  //   await props.getPoolsData();
  //   await props.getMegaData();



  //   //     console.log('megadata',props.mega)
  //   //     let res =props.mega && _.map(props.mega,(state, index) => {
  //   //       return { label: state.i.sn, abbr: state.i.s, key: index};

  //   //   });
  //   //   if (res && !_.isEmpty(res)) {
  //   //     setStates(res);
  //   //   }
  //   //   console.log('states data', res)

  // }, []);


  return (
    <div style={{display:"grid"}}>
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
      <section>
        <div style={{ backgroundImage: "url(" + hero + ")", paddingTop: "70px", paddingBottom: "70px" }}>
          <h1 style={{ color: "white",marginTop:"20px ", fontFamily: "serif", textAlign: "center" }}> {props.statess.sn} State Result</h1>
        </div>
      </section>
      <section style={{backgroundColor:primaryColor}}>
        <div style={{ margin:"100px",background: secColor,width:"800px" }}>
          <div className={classes.container}>
            
            {props.sdata &&
              props.sdata.map((y, index) => (

                <Table className={classes.table} aria-label="customized table" style={{  color: wordColor }}>
                  <TableHead >
                    <TableRow>
                      <StyledTableCell style={{ textAlign: "center", background: "#d7263d", color: 'white' }}>{y.i.n}</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  {/* <TableRow> */}


                  {/* 
            <StyledTableRow>
            <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                 
                 {y.h &&
                    y.h.map((d, index)=> (
                      <div class="numbers-ball" style={{
                        backgroundColor: '#6a040f',
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
                        color: 'white',
                      }}>
                        {d.d}
                      </div>
                    ))}
                 
                  
                </div>
                 
                  
              
              <StyledTableCell>
             
              </StyledTableCell>
              
            </StyledTableRow> */}


                  {/* </TableRow> */}
                  {/* </TableHead> */}
                  <TableBody>
                    {y.h && y.h.map((date, index) => (
                      <TableRow >


                        <StyledTableCell component="th" scope="row" style={{ color: "white" ,textAlign:"center"}}>
                          {date.d}
                          <grid style={{ margin: "200px" }}></grid>
                          {date.n &&
                            date.n.map((number, index) => (
                              < div class="numbers-ball" style={{
                                backgroundColor: primaryColor,
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

                      </TableRow>
                    ))}




                  </TableBody>


                </Table>
              ))}

          </div>
          {/* </TableContainer> */}
          {/* </GridItem> */}

          {/* </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}style={{background:'#6a040f'}}>
        <div className={classes.container} style={{color:'white'}}>
        
        </div> */}
        </div>
        <Footer />

      </section>
    </div>
  );
}


const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    sdata: state && state.data && state.data.selectedStateData && state.data.selectedStateData.g,
    ddata: state && state.data && state.data.selectedStateData && state.data.selectedStateData.g &&
      state.data.selectedStateData.g.h,
    mega: state && state.data && state.data.megaData && state.data.megaData.data &&
      state.data.megaData.data.s,
      statess: state && state.data && state.data.selectedStateData && state.data.selectedStateData.i
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPoolsData: () => dispatch(dataActions.getPoolsData()),
    getMegaData: () => dispatch(dataActions.getMegaData())
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(StatesPage);
