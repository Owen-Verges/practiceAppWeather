import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: []
    }
    this.getData = this.getData.bind(this);
    this.getData()
  }
  getData() {
    axios.get('/data').then(({data}) => {
      this.setState({
        weather: data
      })
    })
  }
  render () {
    const {weather} = this.state;
    console.log('render', weather)
    if(weather['monday']){
      return (
        <div style={{display: 'flex'}}>
          {
            Object.keys(weather).map((day) => {
              return (
                <div style={{marginLeft: '20px'}}>
                  <div style={{color: "red"}}>{day[0].toUpperCase() + day.slice(1)}</div>
                  <img src={`${weather[day].img}`}></img>
                  <div>
                    <span style={{fontWeight:'bold'}}>{weather[day].hi}</span>
                    <span style={{marginLeft:'10px', fontWeight:'bold'}}>{weather[day].low}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div>Loading Data...</div>
      )
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))