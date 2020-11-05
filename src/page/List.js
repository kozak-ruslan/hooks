import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const ListComponent = ({data, onRemove}) => {
  return (
    <>
      <List >
        {data.map(({ id, name, username, email }) => {
          return (
            <ListItem button key={`${id}-${name}`}>
              <ListItemAvatar>
                <Avatar></Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Name: ${name}  Nic: ${username} ${email}`} />
              <ListItemSecondaryAction>
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

export default ListComponent;
