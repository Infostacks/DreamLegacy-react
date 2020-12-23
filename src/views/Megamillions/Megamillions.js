import React,{useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// @material-ui/icons
import { withStyles} from '@material-ui/core/styles';
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

const dashboardRoutes = [];

// const useStyles = makeStyles(styles);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:"#ffbe0b",
    color: "#6a040f",
  },
  body: {
    fontSize: 14,
    color:"#6a040f",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    minWidth: 700,
    minHeight: '200px',
  },
});




 function Mega(props) {
  const classes = useStyles();
  const { ...rest } = props;

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
      <Parallax style={{height:'400px',backgroundColor:'#6a040f'}} lg={4} md={6} xs={12}>
        <div className={classes.container} lg={4} md={6} xs={12}>
          <GridContainer lg={4} md={6} xs={12}>
            <GridItem  style={{height:'60px'}}lg={4} md={6} xs={12}>
              <h1 style={{color : "#ffbe0b"}} lg={4} md={6} xs={12}>Megamillions Winning Numbers</h1>
              <br/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} lg={4} md={6} xs={12} >
        <div>
    
             
            <Divider></Divider>
            <Card style={{background : "#6a040f"}} lg={4} md={6} xs={12}>
            {/* {props.mega &&
          props.mega.map((y, index) => ( */}
              <CardBody lg={4} md={6} xs={12}>
                
            
      
            <h4 style={{color : "#ffbe0b"}} >Next Drawing
              </h4>         
             <div style={{color : "#ffbe0b"}} > 
              <h3 style={{wordSpacing:'50px'}} >{props.mega}</h3>       
              </div>
              </CardBody>
              {/* ))} */}
            </Card> 
            <Divider></Divider>
            <Card style={{background: "#6a040f"}} >
              <CardBody>

                <div lg={4} md={6} xs={12}>
                    <h4 style={{color : "#ffbe0b"}} >Current EST Jackpot</h4>
                    <h3 style={{wordSpacing:'50px',color:'#ffbe0b'}} >$310,000,000</h3>      
                    </div>
                    </CardBody>
                  </Card>
                  <Divider></Divider>
                  <Card style={{background: "#6a040f"}} lg={4} md={6} xs={12}>
              <CardBody>

                <div>
                    <h4 style={{color : "#ffbe0b"}} >Cash Value</h4>
                    <h3 style={{wordSpacing:'50px',color:'#ffbe0b'}} >$238,000,000</h3>      
                    </div>
                    </CardBody>
                  </Card>
                  <Card style={{background: "#6a040f"}} lg={4} md={6} xs={12}>
              <CardBody lg={4} md={6} xs={12}>
<div>
                    
                    <TableContainer component={Paper} lg={4} md={6} xs={12}>
      <Table className={classes.table} aria-label="customized table" >
        <TableHead >
          <TableRow style={{color:'#ffbe0b'}} lg={4} md={6} xs={12}>
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
                <grid style={{marginLeft:"100px"}}></grid>
                {y.n &&
                    y.n.map((number, index) => (
                     < div class="numbers-ball" style={{
                        backgroundColor: '#ffbe0b',
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
     <Card style={{background: "#6a040f", alignItems:"center"}} >
       <CardBody >
    <div>
                    <Button style={{backgroundColor : "#ffbe0b"}}>Past Winning Numbers</Button>
                    </div>   <div>
                    <Button style={{backgroundColor : "#ffbe0b",minWidth:"-webkit-fill-available"}}>Prizes and ODDS</Button>
                   
                    </div>
                    </CardBody>
                    </Card>
        </div>
      </div>
      <Footer/>
    </div>
  );
}


const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    mega: state && state.data && state.data.megaData && state.data.megaData.data && 
   state.data.megaData.data.u,
   tdata:  state && state.data && state.data.megaData && state.data.megaData.data && 
   state.data.megaData.data.s &&  state.data.megaData.data.s[0] &&  state.data.megaData.data.s[0].g && state.data.megaData.data.s[0].g[0] && 
   state.data.megaData.data.s[0].g[0].h
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPoolsData:() => dispatch(dataActions.getPoolsData()),
    getMegaData:() => dispatch(dataActions.getMegaData()),
   }

};

export default connect(mapStateToProps, mapDispatchToProps)(Mega);
