// eslint-disable-next-line no-unused-vars
import React, { memo, useEffect, useRef, useState } from "react";
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
  const [{ name, username, email }, setInput] = useState({
    name: "",
    username: "",
    email: "",
  });
  console.log('render Add component');
  useEffect(() => {
    console.log("setDisabled");
    if (name && username && email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, username, email]);

  const countRef =  useRef(0)

  useEffect(()=>{
    countRef.current ++
  },[name]);
  const resetInput = () =>{
    setInput({
      name: "",
      username: "",
      email: "",
    })
  }
  const handleAdd = ()=> {
    onAdd({id: Math.floor(Math.random() * 200), name,username,email})
    resetInput()
  }

  return (
    <>
      <h3> Add User </h3>
      <div>render count: {countRef.current}</div>
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
          label="username"
          value={username}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, username: e.target.value }))
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
        onClick={() => handleAdd()}
      >
        Save User
      </Button>
    </>
  );
};

export default memo(Add);
