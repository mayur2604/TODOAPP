import React from 'react';
import logo from './logo.svg';
import './App.css';

const List=(props)=>{
const list= props.items.map((value,index)=><li key={index}>{value}</li>);
  return(
  <ul>
   {list}
  </ul>
);
}

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.ADD=this.ADD.bind(this);
    this.state = {
      val: '',
      items: []
    }
  }
  handleChange(e) {
    let val = e.target.value;
    this.setState({val});
  }
  ADD(){
    const previtems=this.state.items;
    this.setState({
      items:[...previtems,this.state.val],
      val:''
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.val} onChange={this.handleChange}/>
        <button onClick={this.ADD}>ADD</button>
        <List items={this.state.items} />
      </div>
    );
  }
}
export default App;
