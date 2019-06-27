import React from "react";
import { ListItem, List, ListItemText, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
 export default props => {
  
    console.log(props.items);
    const items = props.items.map((value, index) => (
      <ListItem>
        <ListItemText key={index} primary={value} />
        <IconButton onClick={() => props.editList(index)}>Edit</IconButton>
        <IconButton>
          <DeleteIcon onClick={() => props.deleteItem(index)} />
        </IconButton>
      </ListItem>

    ));
    return <List>{items}</List>;
};

//export default DisplayList;