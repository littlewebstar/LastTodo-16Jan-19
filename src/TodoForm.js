import React from 'react';

export class TodoForm extends React.Component {
  
  
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  }
  addTask(e) {
    // console.log('Calisti !');
    const inp = document.getElementById('todoInput');
    const val = inp.value;
    inp.value = "";
    // console.log(val);
    this.props.addTasks(val);
    
    e.preventDefault();
  }
  
  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="todo type1">
          <form className="input-wrapper" onSubmit={this.addTask}>
            <input id="todoInput" autoComplete="off" type="text" className="add-todo" placeholder="What needs to be done?"/>
          </form>
        </div>
        <button type="button" className="add-btn" onClick={this.addTask}/>
      </div>
    )
  }
}