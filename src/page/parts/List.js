import React, {memo, useContext} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox } from "@material-ui/core";
import { useUserContext, UserContext } from "../../examples/Context/UserContext";

const ListComponent = ({data, onRemove, onChecked}) => {
  //const [user, setUser] = useUserContext();
  // const [user, setUser] = useContext(UserContext);
  // console.log('useUserContext', user, setUser);
  // const a= 1;
  // console.log('first')
  // const s = useContext(UserContext);
  console.log('render ListComponent')
  
  return (
    <>
      <List >
        {data.map(({ id, name, username, email, isChecked }) => {
          return (
            <ListItem button key={`${id}-${name}`}>
              <ListItemAvatar>
                <Avatar></Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Name: ${name}  Nic: ${username} ${email}`} />
              <ListItemSecondaryAction>
                <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    checked={isChecked}
                    onChange={() => onChecked(id)}
                  />
                <IconButton edge="end" aria-label="delete" onClick={()=> onRemove(id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default memo(ListComponent);
