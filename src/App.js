import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
export default class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currText: "",
      render: null
    }
    this.newTask = this.newTask.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeTask = this.removeTask.bind(this)
  }

  newTask = () => {
    if(this.state.currText != ""){
      this.state.list.push(this.state.currText);
      this.state.currText = "";
      this.forceUpdate()
    }
  }
  onChange = (event) => {
    this.state.currText = event.target.value;
    this.forceUpdate()
  }
  removeTask = (event, index) => {
    this.state.list.splice(index, 1)
    this.forceUpdate()
  }

  render() {
    return  (
      <div>
        <center>
          <div>
          <b>Todo List</b>
          </div>
        <br/>
        <input type="text" onChange={this.onChange} value={this.state.currText}></input>
        <button onClick={this.newTask} value={this.state.currText}>Create Task</button>

        {
          this.state.list.map((task, index) =>{
            return (
              <div>
                {task}
                <button onClick={(event) => {
                  this.removeTask(event, index)
                }}>done</button>
              </div>
            )
          })
        }
        </center>
      </div>
    )
  }
}
