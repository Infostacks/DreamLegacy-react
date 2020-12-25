import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { Grid } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";  
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Box from '@material-ui/core/Box';
// @material-ui/icons

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import { useHistory,withRouter } from "react-router-dom";

// import colors from '../../assets/colors';
let primaryColor= "#17242c";

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function Header(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
    
  const history = useHistory();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


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

    <div className={classes.root}lg={4} xs={12} md={6}>
      <FormGroup >
      </FormGroup>
      <AppBar position="static" style={{background: primaryColor}}>
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            DreamLegacy
          </Typography>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <div className={classes.demo2} style={{background:"#974918",marginTop:"25px"}}> */}
  <StyledTabs value={value} onChange={handleChange} style={{background: primaryColor}}>
    <StyledTab label="MegaMillions" onClick={megaRoute} />
    <StyledTab label="PowerBall" onClick={powerRoute}/>
    <StyledTab label="States Numbers"  onClick={stateRoute}/>
  </StyledTabs>
  <Typography className={classes.padding} />
{/* </div> */}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
//     <Grid style={{height:"10  0px",backgroundColor : "#6a040fc"}} lg={4} md={6} xs={12}> 
//     <AppBar className={appBarClasses}>
    
//       <Toolbar className={classes.container}>
     
   
      
//         <Grid >
//        <div style={{display:"flex"}}>
//           <Button onClick={homeRoute} style={{backgroundColor : "#974918",marginTop:"auto"}}>Home</Button>
//           <Grid style={{margin:"10px"}}></Grid>
          
//           <Button onClick={powerRoute} style={{backgroundColor : "#974918",marginTop:"auto"}}>PowerBall</Button>
//           <Grid style={{margin:"10px"}}></Grid>
//           <Button onClick={megaRoute} style={{backgroundColor : "#974918",marginTop:"auto"}}>MegaMillions</Button>
//           <Grid style={{margin:"10px"}}></Grid>
//           <Button onClick={stateRoute} style={{backgroundColor : "#974918",marginTop:"auto"}}>Statenumbers</Button>
//           </div>
//         </Grid >
//       <Grid style={{marginLeft:"200px",display:"flex"}}>
//           <Button onClick={logInRoute} style={{backgroundColor : "#974918",marginTop:"auto"}}>Log In</Button>
//           <Grid style={{margin:"4px"}}></Grid>
//           <Button onClick={signUpRoute} style={{backgroundColor : "#974918",marginTop:"auto"}}>SignUp</Button>
//           <Grid style={{margin:"4px"}}></Grid>
//           <Button onClick={() => logout()} style={{backgroundColor : "#974918",marginTop:"auto"}}>LogOut</Button>
//           </Grid>
          
       
       

//         {leftLinks !== undefined ? brandComponent : null}
//         <div className={classes.flex}>
//           {leftLinks !== undefined ? (
//             <Hidden smDown implementation="css">
//               {leftLinks}
//             </Hidden>
//           ) : (
//               brandComponent
//             )}
//         </div>
//         <Hidden smDown implementation="css">
//           {rightLinks}
//         </Hidden>
//         <Hidden mdUp>
//           <IconButton
//             background="blue"
//             aria-label="open drawer"
//             onClick={handleDrawerToggle}
//           >
//           </IconButton>
//         </Hidden>
       
//       </Toolbar>

//       {/* <Hidden mdUp implementation="js"> */}
//         <Drawer
//           variant="temporary"
//           anchor={"right"}
//           open={mobileOpen}
//           classes={{
//             paper: classes.drawerPaper
//           }}
//           onClose={handleDrawerToggle}
//         >
//           <div className={classes.appResponsive}>
//             {leftLinks}
//             {rightLinks}
//           </div>
//         </Drawer>
//       {/* </Hidden> */}
//     </AppBar>
//     </Grid>
//   );
// }

// Header.defaultProp = {
//   color: "white"
// };

// Header.propTypes = {
//   color: PropTypes.oneOf([
//     "primary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "transparent",
//     "white",
//     "rose",
//     "dark"
//   ]),
//   rightLinks: PropTypes.node,
//   leftLinks: PropTypes.node,
//   brand: PropTypes.string,
//   fixed: PropTypes.bool,
//   absolute: PropTypes.bool,
//   // this will cause the sidebar to change the color from
//   // props.color (see above) to changeColorOnScroll.color
//   // when the window.pageYOffset is heigher or equal to
//   // changeColorOnScroll.height and then when it is smaller than
//   // changeColorOnScroll.height change it back to
//   // props.color (see above)
//   changeColorOnScroll: PropTypes.shape({
//     height: PropTypes.number.isRequired,
//     color: PropTypes.oneOf([
//       "primary",
//       "info",
//       "success",
//       "warning",
//       "danger",
//       "transparent",
//       "white",
//       "rose",
//       "dark"
//     ]).isRequired
//   })
// };
























