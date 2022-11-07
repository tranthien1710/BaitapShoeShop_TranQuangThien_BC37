import React, { Component } from 'react'

export default class Cart extends Component {


    calcTotalMOney = () => {
        return this.props.Listcart.reduce((total, item) => {
            return total + item.quantity * item.prod.price;
        }, 0)
    }

    render() {
        return (
            <div className="position-absolute w-100 h-100 top-0 left-0" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
                <div className="bg-white position-absolute top-50 start-50 w-50 "
                    style={{
                        transform: "translate(-50%,-50%)"
                    }}>

                    <button onClick={this.props.hide} className="btn btn-danger position-absolute" style={{ top: 0, right: 0 }}>X</button>
                    <h1 className="text-center fs-3">Gio hang</h1>
                    < table className="table " >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>SL</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.Listcart.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.prod.id}</td>
                                            <td>{item.prod.name}</td>
                                            <td >

                                                <img src={item.prod.image} width="100px" alt=""></img>

                                            </td>
                                            <td>
                                                <button onClick={() => { this.props.decreseCart(item.prod.id) }} className="btn btn-primary">-</button>
                                                <span className="mx-2 fs-4">{item.quantity}</span>
                                                <button onClick={() => {
                                                    this.props.increaseCart(item.prod.id)
                                                }} className="btn btn-primary">+</button></td>
                                            <td>{item.prod.price * item.quantity}</td>
                                            <td><button onClick={() => {
                                                this.props.deleteCart(item.prod.id)
                                            }} className="btn btn-primary">Xóa</button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4">Tổng tiền</td>
                                <td>{this.calcTotalMOney()}</td>
                                <td><button onClick={this.props.clearListCart} className="btn btn-info">Thanh Toán</button></td>
                            </tr>
                        </tfoot>
                    </table>
                </ div>
            </div>
        )
    }
}
