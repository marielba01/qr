import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

// import QrReader from 'react-qr-scanner'


class Test extends Component {
  state = {
  result: ''
  }

  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Test;
