import React, { Component} from "react";


class IterationSample extends Component{
    state ={
        names:['하나','둘','셋','넷'],
        name:''
    };
    changeEvent=(e) =>{
        this.setState({
            name:e.target.value
        })
    }
    InputEvent = () =>{
        this.setState({
            names:this.state.names.concat(this.state.name),
            name:''
        })
    }
    DeleteEvent = (index) =>{
        // const{names} = this.state;
        // this.setState({
        //     names:[
        //         ...names.slice(0,index),
        //         ...names.slice(index + 1, names.length)
        //     ]
        // })
        const {names} = this.state;
        this.setState({
            names:names.filter((item,i) =>i !== index)
        });
    }
    render(){
        const nameList = this.state.names.map(
            (name, index) => (<li key={index} onDoubleClick ={() => this.DeleteEvent(index)}>{name}</li>)
        )
        return(
        <div>
            <input type="text" value = {this.state.name} onChange={this.changeEvent}/>
            <button onClick={this.InputEvent}>추가</button>
            <ul>
                {nameList}
            </ul>
        </div>
        );
    }
}

export default IterationSample;