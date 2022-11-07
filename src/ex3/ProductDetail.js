import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        return (
            <div>
                <img src={this.props.Selectitem.image} alt="" width="100px"></img>
                <p>Name:{this.props.Selectitem.name}</p>
                <p>Price:{this.props.Selectitem.price}</p>
                <p>Descripstion:{this.props.Selectitem.description}</p>
                <p>ShortDescripstion:{this.props.Selectitem.shortDescription}</p>
                <p>Quantity:{this.props.Selectitem.quantity}</p>
            </div>
        )
    }
}
