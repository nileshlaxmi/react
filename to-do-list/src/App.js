import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      items: []
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitInput = this.onSubmitInput.bind(this);
  }

  onInputChange(event){
    this.setState({
      text: event.target.value
    });
  }

  onSubmitInput(event){
    event.preventDefault();
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div className="App">
        <header>To Do List</header>
        <form onSubmit={this.onSubmitInput}>
          <input type="text" value={this.state.text} onChange={this.onInputChange}/>
          <button>Add</button> 
        </form>
        <ToDoList items={this.state.items}/>
      </div>
    );
  }
}

class ToDoList extends Component{
  render(){
    return(
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default App;
