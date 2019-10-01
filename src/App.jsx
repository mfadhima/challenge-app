import React, { Component } from 'react'

class App extends Component {
    state = {
        nameInput : '',

    }

    onSubmitClick = () => {
        console.log(this.state.nameInput)
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> App component </h1>
                <input type="text" onChange={(e) => {this.setState({nameInput: e.target.value})}}/>
                <button onClick={this.onSubmitClick} >submit</button>
            </div>
        )
    }
}

export default App
