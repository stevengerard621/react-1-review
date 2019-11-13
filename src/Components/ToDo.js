import React, {Component} from 'react';

class ToDo extends Component {
    constructor(){
        super()
        this.state = {
            things: ['meaty', 'cheesey', 'bready'],
            input: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.addToDoList = this.addToDoList.bind(this)
    }

    inputChange(event){
        this.setState({
            input: event.target.value
        })
    }

    addToDoList(){
        this.state.things.push(this.state.input)
    }

    render(){
        let mappedThings = this.state.things.map(el => (
        <h3>{el}</h3>
        ))
        return(
            <div className='todo-list'>
                <h1>This is the functional part of the app</h1>
                <input onChange={event => this.inputChange(event)} type="text" placeholder='add an item here'/>
                <button onClick={this.addToDoList}>Add Item</button>
                {mappedThings}
            </div>
        )
    }
}

export default ToDo;