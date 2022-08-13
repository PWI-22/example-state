import React from 'react'

class App extends React.Component{ 

    constructor() { 
        super()
        console.log('App Constructor')
        
        this.state = {
            message: '',
            value: 0,
            userOption: 'opcao1'
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

    onChangeValue(event) {
        const newValue = event.target.value
        this.setState({
            value: newValue
        })   
    }

    onChangeOption(event) {
        const newOption = event.target.value
        this.setState({
            userOption: newOption
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
                <input type="number" min={0} max={10}
                    onChange={(event) => this.onChangeValue(event)} />
                {this.state.value}
                
                <br /><br />

                <label>
                    <input type="radio" value="opcao1" 
                        checked={this.state.userOption === 'opcao1'}
                        onChange={(event) => this.onChangeOption(event)}/> Opção 1 
                </label> 
                <br />
                
                <label>
                    <input type="radio" value="opcao2" 
                        checked={this.state.userOption === 'opcao2'}
                        onChange={(event) => this.onChangeOption(event)}/> Opção 2
                </label>
                <br />
                
                <label>
                    <input type="radio" value="opcao3" 
                        checked={this.state.userOption === 'opcao3'}
                        onChange={(event) => this.onChangeOption(event)}/> Opção 3
                </label>

                <br />
                Opção Selecionada: {this.state.userOption}

                <br /><br />
                <input type="button" value="Enviar Informações"
                    onClick={() => this.sendInfo() } />
            </div>
        )
    }
}

export default App