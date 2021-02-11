import React, {Component} from 'react'

export default class Navbar extends Component{
    state={
        open:false,
    }
    clickHandler = () =>{
        this.setState({open:!this.state.open})
    }
    render(){
        return(
            <div className="Navabr">
                <ul className={this.state.open?"hamburger active":"hamburger"} onClick={this.clickHandler}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className={this.state.open?"items active":"items"}>
                    <li>Home</li>
                    <li>About</li>
                    <li>blogs</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}