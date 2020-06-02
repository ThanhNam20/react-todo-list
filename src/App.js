import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",//Khoi tao o input la 1 empty string
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value, //Update gia tri cho oo input
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]; //Copy toan bo gia tri items tu state vao update, them obj newItem vao 
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem:false
    })
  };
  clearList = () => {
    this.setState({
      items:[] // Set items = rong la dc
    })
  }

  handleDetele = (id)=>{ // Xoa item
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filterItems
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList items={this.state.items} clearList={this.clearList} handleDetele={this.handleDetele} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
