import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import { useHistory } from "react-router-dom";
import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";
import Grid from "@material-ui/core/Grid"

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import ResponsiveDrawer from "components/Sidebar";
import OutlinedCard from "components/Chatbox"
const useStyles = makeStyles(styles);



export default function DashWithSidebar(props) {
    const history = useHistory();

    const routeChange = () =>{ ; 
    history.push('/Group');
  }
    
    const classes = useStyles();
    const logout = () => {
        console.log('hello')
        localStorage.removeItem('Token');
        props.history.push('/login');

    };
    return (
        
        <div className={classes.section}>
            <div className={classes.container}>
        
                <div className={classes.title} style={{ textAlign: "center" }}>
                    <h1>Admin Panel</h1>
                </div>
            </div>
            <div id="navbar" className={classes.navbar}>
                <div
                    className={classes.navigation}
                    style={{ backgroundImage: "url(" + image + ")" }}
                >

                    <Header
                        brand="DREAM LEGACY"
                        color="dark"
                        rightLinks={
                            <List className={classes.list}>
                                <ListItem className={classes.listItem}>
                                    <Button
                                        href="#pablo"
                                        className={classes.navLink}
                                        onClick={e => e.preventDefault()}
                                        color="transparent"
                                    >
                                        Users
                  </Button>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <Button
                                        href=""
                                        className={classes.navLink}
                                        onClick={routeChange} 
                                        color="transparent"
                                    >
                                        Groups
                  </Button>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <Button
                                        href="#pablo"
                                        className={classes.navLink}
                                        onClick={e => e.preventDefault()}
                                        color="transparent"
                                    >
                                        Matches
                  </Button>


                                </ListItem>

                                <ListItem className={classes.listItem}>
                                    <Button
                                        justIcon
                                        round
                                        href="#pablo"
                                        className={classes.notificationNavLink}
                                        onClick={e => e.preventDefault()}
                                        color="rose"
                                    >
                                        <Email className={classes.icons} />
                                    </Button>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <CustomDropdown
                                        left
                                        caret={false}
                                        hoverColor="black"

                                        buttonText={
                                            <img
                                                src={profileImage}
                                                className={classes.img}
                                                alt="profile"
                                            />
                                        }
                                        buttonProps={{
                                            className:
                                                classes.navLink + " " + classes.imageDropdownButton,
                                            color: "transparent"
                                        }}
                                        dropdownList={[
                                            "Admin",
                                            "Settings ",
                                            <Button onClick={() => logout()}>Signout</Button>
                                        ]}
                                    />

                                </ListItem>
                            </List>
                        }
                    />
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>   
                            <ResponsiveDrawer/>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <OutlinedCard/>
                        </Grid>   
                    </Grid>  
                </div>
            </div>
        </div>
    );
}
