import React, { Component } from 'react';

/*
 * It looks like this component is not complete... however, it's not quite clear whether this should be a component
 * or not... will it have a visual element to it?
 */

export default class StopWatch extends React.Component{
  state= {lapse: 0, running: false}
  handleRunClick = () => {
    this.setState(state => {
      if(state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse
        this.timer= setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime,
          }, () => {

          })
          })
        }
        return{running !state.running}
    })
    }
    handleClearClick = () => {
      clearInterval(this.timer)
      this.setState({lapse: 0, running: false})
    }
    componentWillUnmount() {
      clearInterval(this.timer)
    }
    render(){
      const{lapse, running} = this.state
      const buttonStyles = {
        border: '1px solid yellow',
        background: 'grey',
        fontSize: 24

      }
    }
  }
}
