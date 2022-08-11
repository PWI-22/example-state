import React from 'react'

class App extends React.Component{ 

    constructor() { 
        super()
        console.log('App Constructor')
        
        this.state = {
            message: '',
            value: 0
        }
    }

    componentDidMount() {
        console.log('App - componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('App - componentDidUpdate')
    }

    sendInfo() {
        alert('Mensagem: ' + this.state.message + '\n' +
            'Valor: ' + this.state.value)
    }

    onChangeMessage(event) {
        console.log('alterou mensagem')

        const newMessage = event.target.value
        this.setState({
            message: newMessage
        })
    }

    render() { 
        console.log('App Render()')
        
        return (
            <div>
                Mensagem: <br />
                <input type="text" onChange={(event) => this.onChangeMessage(event)} />
                {this.state.message}
                <br />

                Valor: <br />
                <input type="number" min={0} max={10}/>

                <br />
                <input type="button" value="Enviar Informações"
                    onClick={() => this.sendInfo() } />
            </div>
        )
    }
}

export default App