import React, {Component} from 'react';

class AddTask extends Component {
    render(){
        return(
            <div>
                <input type="text" />&nbsp;&nbsp;
                <button>Add Task</button>
            </div>
        );
    }
}

export default AddTask;