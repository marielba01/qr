import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

// import QrReader from 'react-qr-scanner'

class QrContainner extends Component{
  constructor(props){
    super(props)
    this.state = {
      result: 'Hold QR Code Steady and Clear to scan',
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
      this.setState({
        result: data,
      })
    console.log(data)
    }

  handleError(err){
    console.error(err)
  }

  render(){
    const previewStyle = {
      height: 400,
      width: 400,
      display: 'flex',
      "justify-content": "center"
    }

    const camStyle = {
      display: 'flex',
      justifyContent: "center",
      marginTop: '-50px'
    }
    
    const textStyle = {
      fontSize: '30px',
      "text-align": 'center',
      marginTop: '-50px'
    }

    return (
      <React.Fragment>
        <div style = {camStyle}>
          <QrReader
            delay={100}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <p style = {textStyle}>
            {this.state.result}
          </p>
        </div>
      </React.Fragment>
    )
  }

}
export default QrContainner;