import React, { Component } from 'react'
import styles from './ProductItem.module.css'
export default class ProductItem extends Component {
    render() {
        const item = this.props.product;
        return (
            <div className={styles.item}>
                <img src={item.image} width="100%"></img>
                <button onClick={() => {
                    this.props.AddToCart(item)
                }} className="btn btn-info">Add to cart</button>
                <button onClick={() => {
                    this.props.SelectedItem(item)
                }} className="btn btn-danger">Detail</button>
            </div>


        )
    }
}
