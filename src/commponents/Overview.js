import React, { Component } from 'react'
import data from '../Data'
import App from '../App'

export default class Overview extends Component {
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        this.setState({arr:data})
    }
  render() {
    return (
      <div>
        <App adem={this.state.arr}/>
      </div>
      
    )
  }
}

