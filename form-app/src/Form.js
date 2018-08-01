import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props){
        super(props);

        this.state={
            firstname: '',
            lastname: '',
            fullname: ''
        };

        this.onChangeHandle1 = this.onChangeHandle1.bind(this);
        this.onChangeHandle2 = this.onChangeHandle2.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onChangeHandle1(event){
        this.setState({
            firstname: event.target.value
        });
        console.log(event.target.value);
    }

    onChangeHandle2(event){
        this.setState({
            lastname: event.target.value
        });
        console.log(event.target.value);
    }

    onSubmitHandle(event){
        event.preventDefault();
        this.setState({
            lastname: event.target.value
        });
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandle}>
                <label>Firstname: <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChangeHandle1} /></label><br /><br />
                <label>Lastname: <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChangeHandle2} /></label><br /><br />
                <button>Submit</button>
                <p>{this.state.firstname}</p>
            </form>
        );
    }
}

export default Form;