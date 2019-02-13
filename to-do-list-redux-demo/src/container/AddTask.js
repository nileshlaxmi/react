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
        const {list, task} = this.state;

        /**
         * Need to ask why using push is not working, type of list is changing from object to number
         */
        // this.setState({
        //     task: '',
        //     list: list.push(task)
        // })

        this.setState({
            task: '',
            list: [...list, task]
        })
    }

    render(){
        const {list} = this.state;
        console.log("typeof(list)", typeof list);
        return(
            <div className="add-task">
                <input type="text" onChange={this.inputChange}/>
                <button onClick={this.addTask}>Add Task</button>
                <div className="list-div">
                    <ListItem list={list} />
                </div>
            </div>
        );
    }
}

export default AddTask;