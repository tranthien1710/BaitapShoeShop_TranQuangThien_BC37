import React, { Component } from 'react'

export default class Cart extends Component {
    calcTotalAmount = () => {
        return this.props.cartList.reduce((total, item) => {
            return total + item.quantity * item.product.price;
        }, 0)
    }
    render() {
        return (
            <div className="position-absolute w-100 h-100 top-0 left-0 " style={{
                backgroundColor: "rgba(0,0,0,0.8)"
            }} >
                <div className="w-50 bg-white position-absolute" style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                }}>
                    <button onClick={this.props.hident} className="btn btn-dark position-absolute" style={{
                        top: 20,
                        right: 20,
                    }}>x</button>
                    <h1 className="text-center fs-3">Gio hang</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ma SP</th>
                                <th>hinh anh</th>
                                <th>so luong</th>
                                <th>don gia</th>
                                <th>thanh tien</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cartList.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.product.id}</td>
                                        <td><img src={item.product.image} style={{ width: "100px" }}></img></td>
                                        <td>
                                            <button onClick={() => { this.props.decreaQuantily(item.product.id) }} className="btn btn-info">-</button>
                                            <span className="mx-2 fs-4">{item.quantity}</span>
                                            <button onClick={() => { this.props.increaseQuantily(item.product.id) }} className="btn btn-info">+</button>
                                        </td>
                                        <td>{item.product.price}</td>
                                        <td>{item.quantity * item.product.price}</td>
                                        <td>
                                            <button onClick={() => { this.props.deleteItemCart(item.product.id) }} className="btn btn-danger">Xoa</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5">Tổng tiền</td>
                                <td>{this.calcTotalAmount()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
