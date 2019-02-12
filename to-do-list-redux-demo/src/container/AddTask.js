import React, {Component} from 'react';
import './AddTask.css';

class AddTask extends Component {
    render(){
        return(
            <div className="add-task">
                <input type="text" />&nbsp;&nbsp;
                <button>Add Task</button>
            </div>
        );
    }
}

export default AddTask;