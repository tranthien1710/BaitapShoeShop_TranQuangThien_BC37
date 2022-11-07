import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        const item = this.props.SelectItem;
        return (
            <div style={{ textAlign: "left" }}>
                <img src={item.image}></img>
                <p>Name:{item.name}</p>
                <p>Price:{item.price} </p>
                <p>Description:{item.description}</p>
                <p>ShortDes:{item.shortDescription}</p>
                <p>Quantity:{item.quantity}</p>
                <p></p>
            </div>
        )
    }
}
