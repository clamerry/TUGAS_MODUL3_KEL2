import React, {Component} from "react";
class Child extends Component {
    // tepat dibawah deklarasi class Child
    state = {
        nama1: "",
        nim1: "",
        nama2: "",
        nim2: "",

    }
    // kode berikutnya...
    render() {
        return (
            <div>
            <button onClick={this.showUs}>Made By:</button>
            <br/>
            <span>{this.state.nama1} {this.state.nim1}</span>
            <br/>
            <span>{this.state.nama2} {this.state.nim2}</span>
            <br/>
            </div>
        );
    }
    componentDidMount() {
        alert(`Mount triggered!`)
        }
    
        showUs = () => {
            
            this.setState((state) => {return {nama1: "Erika Clara S.",nim1: "21120117130063", 
            nama2: "Nareswari Dyah P.",nim2: "21120117120002" }})
            
        }
    
    shouldComponentUpdate(nextProps, nextState, nextContext) {
            return window.confirm('Should we reveal them?');
        }
    componentWillUnmount() {
        alert('Gone Gone Gone')
    }
}


export default Child;