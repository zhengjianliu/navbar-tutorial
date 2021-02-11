import React, {Component} from 'react'

export default class Navbar extends Component{
    render(){
        return(
            <div className="Navabr">
                <ul className="hamburger">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className="items">
                    <li>Home</li>
                    <li>About</li>
                    <li>blogs</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}