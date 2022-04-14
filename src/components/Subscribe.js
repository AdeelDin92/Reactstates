import React, { Component } from 'react'

 export default class Subscribe extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Please click subscribe button",
         sub : "Subscribe"
      }
    }

    BtnChanged = ()=> {
        this.setState({
            message : "Hit the bell icon to never miss",
            sub : "Subscribed"
        })
    } 
  render() {
    return (
      <div>
          <h3>{this.state.message}</h3>
          <button onClick={this.BtnChanged}>{this.state.sub}</button>
      </div>
    )
  }
}
