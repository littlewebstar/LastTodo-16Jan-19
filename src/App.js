import React, { Component } from 'react';
import { Header } from './inc/Header';
import { TodoList } from './TodoList';
import { Footer } from './inc/Footer';
import { TodoForm } from './TodoForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      myTasks :[
        { text: "Kitap oku", status: "passive" },
        { text: "Dinlen", status: "passive" },
        { text: "Yuruyus yap", status: "passive" }
      ]
    };
    
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }
  addTask(val) {
    // console.log(myTasks);
    // this.state.myTasks.push(val);
    // console.log(myTasks);
    let updatedList = this.state.myTasks;
    updatedList.push({text:val , status:"passive"});
    this.setState({ myTasks: updatedList });

  }

  doneTask(task_id) {
    console.log(task_id + 'tamamlandi.');
    task_id = task_id.replace('task_', '');
    let updatedList = this.state.myTasks;
    let newStatus = 'active';
    let currentStatus = updatedList[task_id].status;
    if (currentStatus === 'active') {
      newStatus = 'passive';
    }
    updatedList[task_id].status = newStatus;
    this.setState({ myTasks: updatedList });
  }
  removeTask(task_id) {
    console.log(task_id + 'silindi.');
    task_id = task_id.replace('task_', '');
    let updatedList = this.state.myTasks;
    updatedList.splice(task_id, 1);
    this.setState({ myTasks: updatedList });
  }



  render() {
    return (
      <div className="content">
        <Header />
        <TodoForm addTasks={this.addTask}/>
        <TodoList
          myTasks={this.state.myTasks}
          doneTask={this.doneTask}
          removeTask={this.removeTask}/>
        <Footer />
      </div>
    );
  }
}
export default App;

