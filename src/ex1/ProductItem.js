import React, { Component } from 'react'

import styles from './ProductItem.module.css'
export default class ProductItem extends Component {

    item = this.props.product;
    render() {

        return (
            <div>
                <div className={styles.item}>
                    <img src={this.item.image} style={{ width: "100%" }}></img>
                    <p>Name:{this.item.name}</p>
                    <p>Price:{this.item.price}</p>
                </div>
                <button onClick={() => {
                    this.props.addToCart(this.item)
                }}>Add to Cart</button>
                <button onClick={() => {
                    this.props.SelectItem(this.item)
                }}>Detail</button>


            </div>
        )
    }
}
