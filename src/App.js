import React from 'react';
import './App.css';
import Parent from "./modul3/Parent";

class App extends React.Component {
  state = {
    title : true,
    judul1 : "",
    judul2 : ""
  }
  
  forTitle = () => {
    return this.setState((state) => {
        return {title : !this.state.title, judul1: "TUGAS MODUL 3",judul2: "KELOMPOK 2"}

    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.forTitle}>{this.state.title ? 
            'Click For Title' : 'Hide'}</button>
        {this.state.title ? '' : (
        <div> <span>{this.state.judul1}</span> 
        <br /> <span>{this.state.judul2}</span> 
        </div>)}

        <Parent />
      </div>
    )
  }
}

export default App;