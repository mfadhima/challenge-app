import React, { Component } from 'react'
import axios from 'axios'

const urlApi = 'http://localhost:9999/'

class App extends Component {
    state = {
        nameInput : '',

    }

    onSubmitClick = () => {
        axios.post(
            urlApi + 'postitem',
            {
                imagesName : this.state.nameInput
            }
        )

        // console.log(this.state.nameInput)
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Challenge </h1>
                <input type="text" onChange={(e) => {this.setState({nameInput: e.target.value})}}/>
                <button onClick={this.onSubmitClick} >submit</button>
            </div>
        )
    }
}

export default App
