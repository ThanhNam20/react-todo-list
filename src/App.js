import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "", //Khoi tao o input la 1 empty string
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
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem]; //Copy toan bo gia tri items tu state vao update, them obj newItem vao
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: [], // Set items = rong la dc
    });
  };

  handleDetele = (id) => {
    // Xoa item
    const filterItems = this.state.items.filter((item) => item.id !== id); // Tra ve nhung gia tri item ko giong voi id dang handle
    this.setState({
      items: filterItems,
    });
  };

  handleEdit = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id); //tra ve phan tu ko giong voi id item
    const selectedItems = this.state.items.find((item) => item.id === id); // tra ve phan tu giong voi id item

    this.setState({
      items: filterItems,
      item: selectedItems.title,
      editItem: true,
      id: id
    });
  };

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
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDetele={this.handleDetele}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
