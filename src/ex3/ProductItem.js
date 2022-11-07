import React, { Component } from 'react'
import styles from './ProductItem.module.css'
export default class ProductItem extends Component {
    render() {
        const item = this.props.Product;
        return (

            <div className={styles.item}>
                <img src={item.image} width="100%" alt=""></img>
                <button onClick={() => { this.props.addListCart(item) }} className="btn btn-dark">Add to Cart</button>
                <button onClick={() => {
                    this.props.SelectedItem(item)
                }} className="btn btn-info">Detail</button>
            </div >

        )
    }
}
