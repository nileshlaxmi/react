import React, {Component} from 'react';
import './AddTask.css';
import ListItem from './LisItem';   

class AddTask extends Component {
    constructor(props){
        super(props);

        this.state = {
            task: '',
            list: []
        }
    }
    inputChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    addTask = () => {
        debugger
        this.setState({
            task: '',
            list: this.state.task
        })
        console.log("this.state.task", this.state.task);
    }
    render(){
        const { list} = this.state;
        return(
            <div className="add-task">
                <input type="text" onChange={this.inputChange}/>
                <button onClick={this.addTask}>Add Task</button>
                <div className="list-div">
                    {
                        list && list.length > 0 ? 
                            <ul>
                                {
                                    list.map((item, index) => {
                                        return <ListItem key={index} item={item} />
                                    })
                                }
                            </ul> 
                            :
                            null   
                    }
                </div>
            </div>
        );
    }
}

export default AddTask;