import React, { useEffect } from "react";
// @material-ui/core components
import { getusers } from "../../Services/Users"


import { getProfiles, deleteUser } from "../../Services/Profiles"

import List from "@material-ui/core/List";

import Email from "@material-ui/icons/Email";
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
// core components

import Header from "components/Header/Header.js";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/users.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

function generate(element) {
    return [0, 1, 2, 3, ,].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}




export default function Users(props) {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [userList, setuserList] = React.useState('');
    const [editUsers, seteditUsers] = React.useState('');
    const [secondary, setSecondary] = React.useState(false);
    useEffect(async () => {

        const data = {
            Token: localStorage.getItem('Token')
            // This is the body part
        }
        const result = await getProfiles(data)
        await setuserList(result.users)
        console.log('hello', result)
    }, [])

    const logout = () => {
        console.log('hello')
        localStorage.removeItem('Token');
        props.history.push('/login');
    }

    const OwnDeleteUser = async (id) => {

        const data = {
            Token: localStorage.getItem('Token'),
            userId: id
        }
        const result = await deleteUser(data)
        const usersList = await getProfiles(data)
        await setuserList(usersList.users);
    };




    // const = handleFormFieldChange = (e) => {
    //     let key = e.target.name;
    //     let value = e.target.value;
    //     let newEditUsers = state.editUsers
    //     newEditUsers[key] = value
    //     setState({
    //         editUsers: newEditUsers
    //     });
    // }
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


                    <Header/>
                        {/* brand="DREAM LEGACY"
                        color="dark"
                        rightLinks={ */}
                            <List className={classes.list}>
                                <ListItem className={classes.listItem}>
                                    <Button
                                        href="#pablo"
                                        className={classes.navLink}
                                        onClick={() => Users()}
                                        color="transparent"

                                    >
                                        Users
                  </Button>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <Button
                                        href="#pablo"
                                        className={classes.navLink}
                                        onClick={e => e.preventDefault()}
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
                        {/* } */}
                    
                    <Grid item xm={12} md={6} style={{ textAlign: '-webkit-center' }}>
                        <Typography variant="h6" className={classes.title} style={{ color: '#000000', textAlign: '-webkit-center' }}>
                            Users List
          </Typography>
                        <div className={classes.demo} style={{ color: '#000000' }}>
                            <List dense={dense}>
                                {userList && userList.map((user, index) => (

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={user.lastname}

                                        // secondary={user.lastname ? 'Secondary text' : null}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => OwnDeleteUser(user._id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </Grid>

                </div>
            </div>
        </div>
    );
};

