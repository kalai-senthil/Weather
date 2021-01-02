import React, { Component } from 'react'
import "./Template.css"
export default class Template extends Component {
    render(props) {
        return (
            <div className="two-sec">
            <div className="icon">{this.props.icon}</div>
            <div>
                <p className="info">{this.props.info}</p>
                <p className="value">{this.props.value}</p>
            </div>
            </div>
        )
    }
}
