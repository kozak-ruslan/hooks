import React, {useRef, useState, useEffect} from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const RefComponent = () => {
  // useRef - не викликає рендер
  const classes = useStyles();
  const [valueInput, setValueInput] = useState('test');
  const prevValueRef = useRef()
  const renderCount = useRef(1);

  useEffect(() => {
    console.log(`valueInput: ${valueInput}`)
    prevValueRef.current = valueInput // записуємо prevValueRef.current  valueInput яке відтвориться при наступному рендері
  }, [valueInput]);

  useEffect(() => {
    renderCount.current ++ // при зміні значення не викликає рендер компонента. Обновляється в проміжку між рендером інпута
  });

  const refInput = useRef(null);

  const handleFocus = ()=>{
    refInput.current.focus();
  }
  return (
    <>
      <h2> useRef Hook </h2>
      <h3>Кількість рендера {renderCount.current}</h3>
      <h3>{prevValueRef.current}</h3>
      <form className={classes.root} noValidate autoComplete="off">
          <TextField
            inputRef={refInput}
            id="standard-basic"
            value={valueInput}
            label="author name"
            onChange={(e) => setValueInput(e.target.value)}
          />
        </form>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleFocus}
      >
        Фокус
      </Button>
    </>
  );
};

export default RefComponent;
