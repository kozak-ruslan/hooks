// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Add = ({onAdd}) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [isDisabled, setDisabled] = useState(true);
  const [{ name, userName, email }, setInput] = useState({
    name: "",
    userName: "",
    email: "",
  });
  useEffect(() => {
    console.log("setDisabled");
    if (name && userName && email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, userName, email]);
  return (
    <>
      <h3> Add User </h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <TextField
          id="standard-basic"
          label="userName"
          value={userName}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, userName: e.target.value }))
          }
        />
        <TextField
          id="standard-basic"
          label="E-mail"
          value={email}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </form>
      <Button
        variant="outlined"
        disabled={isDisabled}
        color="primary"
        onClick={() => {onAdd({id: Math.floor(Math.random() * 200), name,userName,email})}}
      >
        Save User
      </Button>
    </>
  );
};

export default Add;
