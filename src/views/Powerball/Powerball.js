import React,{useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// @material-ui/icons

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import h2 from "../../assets/img/h2.jpg"
import h3 from "../../assets/img/h3.jpg"
import hero from "../../assets/img/hero.jpg"
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
import {connect} from "react-redux";
import CardFooter from "components/Card/CardFooter.js"; 
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Divider } from "@material-ui/core";
import * as dataActions from '../../Store/Actions/Index'
import { data } from "jquery";
import * as _ from 'lodash';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:"#c6c6c6",
    color: wordColor,
    fontWeight:"1000",
    fontFamily:"serif"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, matches, prizes, powerplay2x, powerplay3x,powerplay4x,powerplay5x,powerplay10x) {
  return { name, matches, prizes, powerplay2x, powerplay3x,powerplay4x,powerplay5x,powerplay10x };
}

const rows = [
  createData([1,2,3,4,5,6,7], 'GRAND PRIZE', 'GRAND PRIZE', 'GRAND PRIZE', 'GRAND PRIZE','GRAND PRIZE','GRAND PRIZE','GRAND PRIZE'),
  createData([1,2,3,4,5],'$1 Million' ,'$1 Million', '$2 Million', '$2 Million', '$2 Million','$2 Million','$2 Million'),
  createData([1,2,3,4,5,6],'$50,000', '$50,000', '$100,000', '$150,000', '$200,000','$250,000','$500,000'),
  createData([1,2,3,4],'$100', '$100', '$200', '$300', '$400','$500','$1000'),
  createData([1,2,3,4,5],'$100','$100', '$200', '$300', '$400','$500','$1000'),
  createData([1,2,3],'$7', '$7','$14', '$21', '$28','$35','$70'),
  createData([1,2,3,4],'$7','$7', '$14', '$21', '$28','$35','$70'),
  createData([1,2,3],'$4', '$4','$8', '$12', '$16','$20','$40'),
  createData([1],'$4', '$4','$8', '$12', '$16','$20','$40'),
];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

const dashboardRoutes = [];
let primaryColor= "#17242c";
let wordColor= "#3f566d";
let secColor="#c6c6c6";
// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor:"#ffbe0b",
//     color: "#6a040f",
//   },
//   body: {
//     fontSize: 14,
//     color:"#6a040f",
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);




// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//     minHeight: '200px',
//   },
// });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


 function Mega(props) {
  // const classes = useStyles();
  const { ...rest} = props;
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
 

 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   useEffect(()=>{
    (async() => {

     await props.getPoolsData();
    await props.getMegaData();
    await props.getPowerData();
    
   
  
    
  
   })();
  },[]);


  return (
    <div lg={4} md={6} xs={12}>
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



  {/* Hero Section */}

      <section>
        <div style={{ backgroundImage: "url(" + hero + ")", paddingTop: "40px", paddingBottom: "40px"  }}>

          <div style={{ color: "#ffbe0b" }} >
            {/* 
          // USE MATERIAL COMPONENTS
          <Typography variant="h1" component="h2">
  h1. Heading
</Typography> */ }
            <h2 style={{ color: secColor, textAlign: 'center', fontWeight: '1000',fontFamily:"serif" }}>Next Drawing
            </h2>
            <h3 style={{ textAlign: 'center', color: secColor }}>
              {props.pdata && props.pdata.field_next_draw_date && props.pdata.field_next_draw_date} </h3>
          </div>
          <div>
            <Grid container style={{textAlign:"-webkit-center"}}>
              <Grid item md={6} xs={12}>

                <Card style={{ background: secColor, width: "450px" }} xs={12} md={6}>
                  <CardBody>
                    <div>
                      <h2 style={{ textAlign: 'center', color: wordColor }}>Estimated Jackpot</h2>
                      <h3 style={{ margin: "0px 80px 25px", color: wordColor, textAlign: "center" }}> {props.pdata && props.pdata.field_prize_amount && props.pdata.field_prize_amount} </h3>
                    </div>
                  </CardBody>
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <Card style={{ background: secColor, width: "450px" }}>
                  <CardBody>
                    <h4 style={{ color: wordColor, textAlign: "center" }}>Winning Numbers - {props.pools && props.pool.field_draw_date}
                    </h4>
                    {props.pool &&
                      props.pool.field_winning_numbers.split(',').map((y, index) => (
                        < div class="numbers-ball" style={{
                          backgroundColor: wordColor,
                          width: '35px',
                          height: '35px',
                          borderRadius: '20px',
                          textAlign: 'center',
                          alignItems: 'center',
                          display: 'inline-flex',
                          margin: '10px 8px 10px 0',
                          marginLeft: '20px',
                          justifyContent: 'center',
                          fontSize: '19px',
                          fontFamily: 'ProximaNova-Bold',
                          color: 'white',
                        }}>
                          {y}
                        </div>
                      ))}
                    <h3 style={{ color: wordColor, marginLeft: '100px' }}>PowerPlay 3x</h3>
                  </CardBody>
                </Card>
              </Grid>

            </Grid>
          </div>
        </div>
      </section>

  {/* Hero Section Ends*/}



 {/* Total Winner Section */}
 
      <section style={{ paddingTop: "20px", paddingBottom: "40px", backgroundColor: '#000000de' }} >
        <div style={{ color: "#ffbe0b" }}>
          <h2 style={{ color: secColor, textAlign: 'center', fontWeight: '1000', fontFamily: "serif" }}>Total Winners
            </h2>
          <h3 style={{ textAlign: 'center', color: secColor }}>
            {props.pdata && props.pdata.field_next_draw_date && props.pdata.field_next_draw_date} </h3>
        </div>
        <div style={{ textAlign: "-webkit-center" }}>


          <div className={classes.root} style={{ width: "90%", }}>

            <AppBar position="static" style={{ background: secColor, color: primaryColor }}>
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"

              >
                <LinkTab label="Winning Numbers"{...a11yProps(0)} />
                <LinkTab label="Past Drawings"  {...a11yProps(1)} />
                <LinkTab label="Total Winners"{...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} style={{ background: primaryColor }}>
              <div style={{ display: "flex" }}>
                <card style={{ background: secColor }}>
                  <CardBody>

                    <h3 style={{ marginLeft: "50px", color: primaryColor }}> {props.pool && props.pool.field_draw_date && props.pool.field_draw_date}</h3>
                    <br></br>
                    {props.pool &&
                      props.pool.field_winning_numbers.split(',').map((y, index) => (
                        < div class="numbers-ball" style={{
                          backgroundColor: primaryColor,
                          width: '35px',
                          height: '35px',
                          borderRadius: '20px',
                          textAlign: 'center',
                          alignItems: 'center',
                          display: 'inline-flex',
                          margin: '10px 8px 10px ',
                          marginLeft: '5px',
                          justifyContent: 'center',
                          fontSize: '19px',
                          fontFamily: 'ProximaNova-Bold',
                          color: 'white',
                        }}>
                          {y}
                        </div>
                      ))}
                    <br></br>
                    <h4 style={{ color: primaryColor, marginLeft: "50px" }}> Power Play {props.pool && props.pool.field_multiplier &&
                      props.pool.field_multiplier}X</h4>
                  </CardBody>
                </card>
                <card style={{ background: secColor, marginLeft: "10px" }}>
                  <CardBody>
                    <h3 style={{ marginLeft: "50px", color: primaryColor }}> {props.pool1 && props.pool1.field_draw_date && props.pool1.field_draw_date}</h3>
                    <br></br>
                    {props.pool1 &&
                      props.pool1.field_winning_numbers.split(',').map((y, index) => (
                        < div class="numbers-ball" style={{
                          backgroundColor: primaryColor,
                          width: '35px',
                          height: '35px',
                          borderRadius: '20px',
                          textAlign: 'center',
                          alignItems: 'center',
                          display: 'inline-flex',
                          margin: '10px 8px 10px ',
                          marginLeft: '5px',
                          justifyContent: 'center',
                          fontSize: '19px',
                          fontFamily: 'ProximaNova-Bold',
                          color: 'white',
                        }}>
                          {y}
                        </div>
                      ))}
                    <br></br>
                    <h4 style={{ color: primaryColor, marginLeft: "50px" }}> Power Play {props.pool1 && props.pool1.field_multiplier &&
                      props.pool1.field_multiplier}X</h4>
                  </CardBody>
                </card>
                <card style={{ background: secColor, marginLeft: "10px" }}>
                  <CardBody>
                    <h3 style={{ marginLeft: "50px", color: primaryColor }}> {props.pool2 && props.pool2.field_draw_date && props.pool2.field_draw_date}</h3>
                    <br></br>
                    {props.pool2 &&
                      props.pool2.field_winning_numbers.split(',').map((y, index) => (
                        < div class="numbers-ball" style={{
                          backgroundColor: primaryColor,
                          width: '35px',
                          height: '35px',
                          borderRadius: '20px',
                          textAlign: 'center',
                          alignItems: 'center',
                          display: 'inline-flex',
                          margin: '10px 8px 10px ',
                          marginLeft: '5px',
                          justifyContent: 'center',
                          fontSize: '19px',
                          fontFamily: 'ProximaNova-Bold',
                          color: 'white',
                        }}>
                          {y}
                        </div>
                      ))}
                    <br></br>
                    <h4 style={{ color: primaryColor, marginLeft: "50px" }}> Power Play {props.pool2 && props.pool2.field_multiplier && props.pool2.field_multiplier}X</h4>
                  </CardBody>
                </card>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} style={{ background: primaryColor }}>
              <h1>UNDER CONSTRUCTION</h1>
            </TabPanel>
            <TabPanel value={value} index={2} style={{ background: primaryColor }}>
              <h1>UNDER CONSTRUCTION</h1>
            </TabPanel>
          </div>


        </div>
      </section>


 {/* Total Winner Section End */}


{/* Table Section */}

      <div style={{ textAlign: "-webkit-center" }}>
        <section style={{ backgroundColor: "#4b4b4b", paddingTop: "50px",paddingBottom:"50px" }}>
          <TableContainer component={Paper} style={{ background: primaryColor, width: "85%" }}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow >
                  <StyledTableCell>Match</StyledTableCell>
                  <StyledTableCell align="right">Prize</StyledTableCell>
                  <StyledTableCell align="right">PowerPlay 2X </StyledTableCell>
                  <StyledTableCell align="right">PowerPlay 3X </StyledTableCell>
                  <StyledTableCell align="right">PowerPlay 4X </StyledTableCell>
                  <StyledTableCell align="right">PowerPlay 5X </StyledTableCell>
                  <StyledTableCell align="right">PowerPlay 10X </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="right" style={{ color: secColor }}>
                    {row.name && row.name.map((y, index) => (
                  _.last(row.name) == y ?
                      < div class="numbers-ball" style={{
                        backgroundColor:'red',
                        width: '15px',
                        height: '15px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        alignItems: 'center',
                        display: 'inline-flex',
                        margin: '2px 2px 2px ',
                        marginLeft: '2px',
                        justifyContent: 'center',
                        fontSize: '10px',
                        fontFamily: 'ProximaNova-Bold',
                        color: 'black',
                      }}>
                      </ div> :
                    < div class="numbers-ball" style={{
                      backgroundColor:wordColor,
                      width: '15px',
                      height: '15px',
                      borderRadius: '10px',
                      textAlign: 'center',
                      alignItems: 'center',
                      display: 'inline-flex',
                      margin: '2px 2px 2px ',
                      marginLeft: '2px',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontFamily: 'ProximaNova-Bold',
                      color: 'black',
                    }}>
                    </ div>
                    ))}
                    </StyledTableCell>
                    
                    <StyledTableCell align="right" style={{ color: secColor }}>{row.prizes}</StyledTableCell>
                    <StyledTableCell align="right" style={{ color: secColor }}>{row.powerplay2x}</StyledTableCell>
                    <StyledTableCell align="right" style={{ color: secColor }}>{row.powerplay3x}</StyledTableCell>
                    <StyledTableCell align="right" style={{ color: secColor }}>{row.powerplay4x}</StyledTableCell>
                    <StyledTableCell align="right" style={{ color: secColor }} >{row.powerplay5x}</StyledTableCell>
                    <StyledTableCell align="right" style={{ color: secColor }} >{row.powerplay10x}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </section>

      </div>     


    {/* Table Section End     */}
    
   
    <Footer/>
  
    {/* Footer Section */}


    </div>         
         );}
      

 const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    mega: state && state.data && state.data.megaData && state.data.megaData.data && 
   state.data.megaData.data.u,
   tdata:  state && state.data && state.data.megaData && state.data.megaData.data && 
   state.data.megaData.data.s &&  state.data.megaData.data.s[0] &&  state.data.megaData.data.s[0].g && state.data.megaData.data.s[0].g[1] && 
   state.data.megaData.data.s[0].g[1].h,
   pdata: state && state.data && state.data.powerData && state.data.powerData.data && state.data.powerData.data[0],
   pool: state && state.data && state.data.poolsData && state.data.poolsData.data && state.data.poolsData.data[0],
   pool1: state && state.data && state.data.poolsData && state.data.poolsData.data && state.data.poolsData.data[1],
   pool2: state && state.data && state.data.poolsData && state.data.poolsData.data && state.data.poolsData.data[2]
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPoolsData:() => dispatch(dataActions.getPoolsData()),
    getMegaData:() => dispatch(dataActions.getMegaData()),
    getPowerData:() => dispatch(dataActions.getPowerData()),
   }

}; 

export default connect (mapStateToProps,mapDispatchToProps)(Mega);
