import React from 'react'

class App extends React.Component{ 

    constructor() { 
        super()
        this.state = {
            message: 'Mensagem inicial'
        }
    }

    updateMessage() {
        this.setState({
            message: 'Mensagem alterada'
        })
        console.log(this.state.message)
    }

    render() { 
        return (
            <div>
                {this.state.message}
                <br />
                <input type="button" value="Alterar mensagem"
                    onClick={() => this.updateMessage() } />
            </div>
        )
    }
}

export default App