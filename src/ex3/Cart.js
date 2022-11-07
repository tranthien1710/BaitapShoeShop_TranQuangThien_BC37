import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className="position-absolute w-100 h-100 " style={{
                backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0
            }}>
                <div className="table w-50  position-absolute bg-white" style={{
                    top: "50%", left: "50%", transform: " translate(-50%,-50%)"
                }}>
                    <h3>Giỏ hàng</h3>
                    <button onClick={this.props.HideCart} className="btn btn-dark position-absolute " style={{
                        top: 0, right: 0
                    }}>X</button>
                    <table className="table table-dark" >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.ListCart.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.product.id}</td>
                                        <td>{item.product.name}</td>
                                        <td><img src={item.product.image} width="100px"></img></td>
                                        <td><button onClick={() => {
                                            this.props.DescreaseCart(item.product.id)
                                        }} className="btn btn-info">-</button>
                                            <span> {item.quantity} </span>
                                            <button onClick={() => {
                                                this.props.IncreaseCart(item.product.id)
                                            }} className="btn btn-info">+</button>
                                        </td>
                                        <td>{item.product.price}</td>
                                        <td>{item.product.price * item.quantity}</td>
                                        <td><button className="btn btn-primary"
                                            onClick={() => { this.props.DeleteCart(item.product.id) }}>Xóa</button></td>

                                    </tr>
                                )
                            })

                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
