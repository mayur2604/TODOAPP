import React from "react";

import {
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
  TextField,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DisplayList from "./DisplayList.js";
/*const DisplayList = props => {
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
*/
class App extends React.Component {
  constructor() {
    super();
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = {
      val: "",
      items: []
    };
  }
  deleteItem(ind) {
    console.log(this.state.items);

    this.setState({
      items: this.state.items.filter((val, index, array) => {
        return index !== ind ? val : null;
      })
    });
    console.log(this.state.items);
  }
  handleChange(e) {
    const val = e.target.value;
    this.setState({ val });
    console.log(val);
  }
  editList(ind) {
    const newVal = prompt();
    console.log(newVal);

    this.setState({
      items: this.state.items.map((val, index, array) => {
        return index === ind ? newVal : val;
      })
    });
  }
  //add
  addItem() {
    const previtems = this.state.items;
    this.setState({
      items: [...previtems, this.state.val],
      val: ""
    });
    // console.log(this.state.items);
  }
  render() {
    return (
      <Container maxWidth="xs">
        <Typography variant="h3" color="primary">
          TODO APPz
        </Typography>
        <br />
        <br />
        <Container item>
          <TextField
            id="standard-search"
            label="enter the item to add.."
            style={{ width: 300 }}
            value={this.state.val}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={this.addItem}>
            ADD
          </Button>
        </Container>
        <br />

        <Container item maxWidth="sm">
          <DisplayList
            items={this.state.items}
            editList={this.editList.bind(this)}
            deleteItem={this.deleteItem}
          />
        </Container>
      </Container>
    );
  }
}
export default App;
