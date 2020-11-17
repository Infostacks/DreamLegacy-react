import React, { useState } from "react";
import { login } from 'Services/Authentication'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
// import NotificationAlert from "react-notification-alert";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);




export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email, setEmail] = React.useState('Enter Your Email');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [state, setuseState] = useState('');
  const [isLoading, setisLoading] = useState('');
  const [responseError, setresponseError] = useState('');
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const valid = () => {
    if (!email.includes('@')) {
      setEmailError("invalid Email")
    }
    else if (!email.includes("@")) {
      setEmailError("invalid Email")
    }
    else if (!email.includes(".com")) {
      setEmailError("invalid Email")
    }
    else if (password.length < 5) {
      passwordError("Invalid Password")

    }
    else {

      return true
    }
  }

  const getdata = async () => {
    const data = {
      Email: email,
      password: password // This is the body part
    }
    const loginResult = await login(data);
    console.log('hello login result', loginResult)
    return loginResult;


  };

  const submit = async () => {



    setisLoading("true")



    if (valid()) {
      const result = await getdata()
      console.log('hello', result)
      localStorage.setItem('Token', result.token);
      if (result && result.message == "User Authenticated") {



        setisLoading("false")


        props.history.push('/admin/Dashboard')
      } else {
        // this.notify(result.message, "danger")


        setresponseError("result.message")
        setisLoading("false")

      }
    }
  }

  return (
    <div className="content" style={{ textAlign: "center" }}>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]} style={{}}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login Form</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        // href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        // href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        // href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={email}
                      onHandleChange={(event) => setEmail(event.target.value)}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={password}
                      onHandleChange={(event) => setPassword(event.target.value)}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>

                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}

                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={() => submit()}>
                      LOGIN
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

