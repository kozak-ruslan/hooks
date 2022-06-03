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

const Filter = ({onAddFilter, filterName}) => {
  const classes = useStyles();
  const [name, setInput] = useState('');
  const handleChange = ({target: {value}}) => {
    setInput((value))
  }
  useEffect(() => {
    if (filterName === name) return
    setInput(filterName)
  }, [filterName])

  return (
    <>
      <h3> Add Filter </h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          onChange={handleChange}
        />
      </form>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {onAddFilter(name)}}
      >
        Save Filter
      </Button>
    </>
  );
};

export default Filter;
