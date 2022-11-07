import React, { Component } from 'react'

export default class ProductItemDetail extends Component {
    render() {
        const { name, price, description, shortDescription, quantity, image } = this.props.item;
        return (

            <div>
                <img src={image} style={{ width: "10%" }}></img>
                <p>Name:{name}</p>
                <p>Price:{price}</p>
                <p>Des:{description}</p>
                <p>ShortDes:{shortDescription}</p>
                <p>Quanlity:{quantity}</p>
            </div>
        )
    }
}
