import React from "react";
import TodoInput from "../src/components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
export default { title: "TodoInput", };

export const withForm = () => (
  <div className="card card-body my-3">
    <form>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text bg-primary text-white">
            <i className="fas fa-book" />
          </div>
        </div>
        <input
          placeholder="Add here ..."
          type="text"
          className="form-control"
        />
      </div>
      <button type="submit" className={" btn btn-block btn-primary mt-3"}>
        Add Item
      </button>
    </form>
  </div>
);

