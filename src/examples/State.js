import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useDispatch, useSelector } from "react-redux";
import { setTitle, incrementToolkit } from "../toolkitRedux/toolkitSlice";
import { fetchUser } from "../toolkitRedux/actionCreators";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    
  },
  dateWrapper:{
    width: 300,
    margin: "0 auto",
  },
}));

//get init state
const getDataCount = () => {
  console.log("get init state...");
  return Math.floor(Math.random() * 20)
};

const StateComponent = () => {
  const classes = useStyles();
  const [{ title, description }, setPageData] = useState({
    title: "State Component",
    description: "Освоєння useState Hooks"
  });

  const [count, setCount] = useState(getDataCount);
  const [name, setName] = useState("Ivan");
  const [nameInput, setNameInput] = useState("");

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleSaveName = () => {
    setName(nameInput);
    setNameInput("");
  };

  const handleChangeDataPage = () => {
    setPageData((perv) => ({
      ...perv,
      title: "State Component (useState)",
    }));
  };
  const { title: titleToolkit, countToolkit, users }  = useSelector(state => state.toolkit);
  const dispatch = useDispatch()
  console.log('toolkit: ', title);
  useEffect(() => {
    dispatch(fetchUser());
  }, [])


  console.log('>>>', users);

  return (
    <>
    <div className={classes.dateWrapper}>
    <DateRangePickerComponent  id="daterangepicker" placeholder='Select a range' />
    </div>
      
      <h2>{title}</h2>
      <h3>{titleToolkit}</h3>
      <h3>countToolkit: {countToolkit}</h3>
      <Button variant="outlined" color="primary" onClick={()=>{dispatch(incrementToolkit(10))}}>+</Button>
      <Button variant="outlined" color="primary" onClick={()=>{dispatch(setTitle('New Toolkit'))}}>
        Edit toolkit
      </Button>
      <h3>{description}</h3>
      <div>автор: {name}</div>
      <Button variant="outlined" color="primary" onClick={increment}>
        Increment
      </Button>
      <Button variant="outlined" color="secondary" onClick={decrement}>
        Decrement
      </Button>
      <div>Count: {count}</div>
      <div>
        edit author
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            value={nameInput}
            label="author name"
            variant="outlined"
            onChange={(e) => setNameInput(e.target.value)}
          />
        </form>
        <Button variant="outlined" color="primary" onClick={handleSaveName}>
          Set Name
        </Button>
        <Button variant="outlined" color="primary" onClick={handleChangeDataPage}>
          Edit Title Page
        </Button>
      </div>
      <ul>
        {users && users.map((user)=>(<li key={user.id}>{user.name}</li>))}
      </ul>
    </>
  );
};
export default StateComponent;
