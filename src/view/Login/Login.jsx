import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "400px",
    margin: "100px auto",
    paddingTop: "10%",
    backgroundColor: "#8ce28c",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Link to="/">
            <button>Retour</button>
          </Link>
        </div>
        <p>
          Accès réservé <br />
          Merci de renseigner vos identifiants
        </p>

        <div>
          <TextField
            required
            id="filled-required"
            label="Email"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            required
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </div>
        <Link to="/admin">
          <Button variant="contained">Submit</Button>
        </Link>
      </form>
    </>
  );
}

export default Login;
