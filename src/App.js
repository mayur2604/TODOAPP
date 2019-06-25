import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

const List=(props)=>{
const list= props.items.map((value,index)=><li key={index}>{value}</li>);
  return(
  <ul>
   {list}
  </ul>
);
};

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.ADD=this.ADD.bind(this);
    this.state = {
      val: '',
      items: []
    };
  }
  handleChange(e) {
    const val = e.target.value;
    this.setState({val});
  }
  ADD(){
    const previtems=this.state.items;
    this.setState({
      items:[...previtems,this.state.val],
      val:''
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.val} onChange={this.handleChange}/>
        <br /><br/><Button variant="contained" color="primary"  onClick={this.ADD}>ADD</Button>
        <List items={this.state.items} />
      </div>
    );
  }
}
export default App;
