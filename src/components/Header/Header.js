import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { Grid } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Box from '@material-ui/core/Box';
// @material-ui/icons

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import { useHistory,withRouter } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function Header(props) {
  
  const history = useHistory();

  const homeRoute=() =>{

   history.push("/landing-page");

  }
  const signUpRoute = () => {
   history.push("/signup");
  
  }
  
  const logInRoute = () => {
   history.push("/login");
  
  }
  const powerRoute = () => {
   history.push("/powerball");
  
  }

  const stateRoute=() =>{
   history.push("/states");

  }
  
  const megaRoute = () => {
   history.push("/megamillions");
  
  }
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const logout = () => {
    console.log('hello')
    localStorage.removeItem('Token');
    props.history.push('/login');

};
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: "blue",
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = <Button className={classes.title}>{brand}</Button>;
  return (
    <Grid> 
    <AppBar className={appBarClasses}>
    
      <Toolbar className={classes.container}>
     
   
      
        <Grid>
        <Box display='flex' lg={4} xs={12} md={6} style={{whiteSpace:'6'}}>
          <Button onClick={homeRoute} style={{backgroundColor : "#ffbe0b"}}>Home</Button>
          <Grid style={{margin:"10px"}}></Grid>
          
          <Button onClick={powerRoute} style={{backgroundColor : "#ffbe0b"}}>Powerball</Button>
          <Grid style={{margin:"10px"}}></Grid>
          <Button onClick={megaRoute} style={{backgroundColor : "#ffbe0b"}}>Megamillions</Button>
          <Grid style={{margin:"10px"}}></Grid>
          <Button onClick={stateRoute} style={{backgroundColor : "#ffbe0b"}}>State numbers</Button>
        </Box>
        </Grid >
      <div style={{float:'right'}}>
          <Button onClick={logInRoute} style={{backgroundColor : "#ffbe0b"}}>Log In</Button>
          <Grid style={{margin:"10px"}}></Grid>
          <Button onClick={signUpRoute} style={{backgroundColor : "#ffbe0b"}}>SignUp</Button>
          <Grid style={{margin:"10px"}}></Grid>
          <Button onClick={() => logout()} style={{backgroundColor : "#ffbe0b"}}>LogOut</Button>
          </div>
          
       
       

        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
              brandComponent
            )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            background="blue"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
          </IconButton>
        </Hidden>
       
      </Toolbar>

      {/* <Hidden mdUp implementation="js"> */}
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      {/* </Hidden> */}
    </AppBar>
    </Grid>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
























