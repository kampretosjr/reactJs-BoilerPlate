import React, { Component } from 'react'

export class detail extends Component {
  componentDidMount() {
    alert('mmount detail ')
  }
  componentWillUnmount() {
    alert('unmount detail')
  }
  render() {
    return (
      <div>
        <p>detail</p>
      </div>
    )
  }
}

export default detail
