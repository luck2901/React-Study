import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            number:0
        }
    }
    static defaultProps ={
        name:"신승현"
    }
    render(){
        return(
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>저의 나이는 {this.props.age}살입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={()=>{
                    this.setState({number:this.state.number+1})
                }}>Increment</button>
            </div>
        )
    }
}
MyComponent.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
}

export default MyComponent;