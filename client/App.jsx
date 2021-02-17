import React from "react";
import GroceryItem from "./GroceryItem.jsx";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gList: [],
      GroceryItem: "",
    };
    this.updateItem = this.updateItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    axios.get('/api/groceries')
    .then(res => {return res.data} )
    .then(groceryData => this.setState({gList: groceryData}))
    .catch(err => err)
   }

  addItem(event) {
    let addedItem = {
      groceryItem: this.state.GroceryItem
    }
    axios.post('/api/groceries', addedItem)
    .then(res => {console.log(res)})
    .catch(err => err)
  }


  //update the current GroceryItem
  updateItem(event) {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({
      GroceryItem: event.target.value
    })

  }

  render() {
    return (
      <div>
        <input placeholder="Add Item" onChange={this.updateItem} />
        <button type='submit' onClick={this.addItem}>Submit</button>
        <ul>
          <GroceryItem gList={this.state.gList}/>
        </ul>
      </div>
    );
  }
}
