import React, {Component} from "react";

class EventPractice extends Component{
    state={
        message:''
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            message: e.target.value
        });
    }
    /* 
    handleChange =(e) =>{
        this.setState({
            message:e.target.value
        });
    }
    */
    handleClick(){
        this.setState({
            message: ''
        });
    }
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                type = "text" //input의 type
                name = "message" //input의 제목.
                placholder = "아무거나 입력하시오." //hint
                value={this.state.message}
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;