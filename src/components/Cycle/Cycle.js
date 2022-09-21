import React, { Component } from 'react'
import './Cycle.css'

export default class Cycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: 'pink'
     }
        console.log('contructor')
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ backgroundColor: 'purple' })
            console.log('Dentro del componentDidMount')
        }, 2000);
    }

    componentDidUpdate() {
        document.getElementById('message').innerHTML = 'The box is ' + this.state.backgroundColor;
        console.log('Dentro del componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('Dentro del componentWillUnmount')
    }

    render() {
        {console.log('render')}
        return (
            <div className='container'>
                <div className='box' style={{ backgroundColor: `${this.state.backgroundColor}` }}>Cycle</div>
                <p id='message'></p>

            </div>
        )
    }
}
