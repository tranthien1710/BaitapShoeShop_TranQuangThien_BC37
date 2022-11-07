import React, { Component } from 'react'
import styles from './ProductList.module.css'
import ProductItem from './ProductItem'
import ProductDetail from './ProductDetail'
import Cart from './Cart'

export default class ProductList extends Component {
    ListProduct = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ]
    renderListProduct = () => {
        return this.ListProduct.map((item) => {
            return <ProductItem AddToCart={this.AddToCart} SelectedItem={this.SelectedItem} product={item} />
        })
    }
    state = {
        SelectItem: null,
        showcart: false,
        ListCart: []
    }
    SelectedItem = (item) => {
        this.setState({
            SelectItem: item,
        })
    }
    ShowCart = () => {
        this.setState({
            showcart: true,
        })
    }
    HideCart = () => {
        this.setState({
            showcart: false,
        })
    }
    AddToCart = (product) => {
        const cloneCart = [...this.state.ListCart];
        const cartItem = {
            prod: product,
            quantity: 1,
        }
        const fountItem = cloneCart.find((item, index) => {
            return product.id === item.prod.id;
        })
        if (fountItem) {
            fountItem.quantity++;
        }
        else {
            cloneCart.push(cartItem);
        }
        this.setState({
            ListCart: cloneCart,
        })

    }
    increaseCart = (id) => {
        const cloneCart = [...this.state.ListCart];
        const found = cloneCart.find((item) => {
            return item.prod.id === id;
        })
        found.quantity++;
        this.setState({
            ListCart: cloneCart,
        })

    }
    deleteCart = (id) => {
        const cloneCart = [...this.state.ListCart];
        const found = cloneCart.findIndex((item) => {
            return item.prod.id === id;
        })
        cloneCart.splice(found, 1)

        this.setState({
            ListCart: cloneCart,
        })
    }
    decreseCart = (id) => {
        const cloneCart = [...this.state.ListCart];
        const found = cloneCart.find((item) => {
            return item.prod.id === id
        })
        if (found.quantity === 1) {
            return this.deleteCart(id)
        } else {
            found.quantity--;
        }
        this.setState({
            ListCart: cloneCart,
        })

    }
    calcAmountCart = () => {
        return this.state.ListCart.reduce((total, item) => {
            return total + item.quantity;
        }, 0)
    }
    clearListCart = () => {
        this.setState({
            ListCart: [],
        })
    }
    render() {
        return (
            <div>
                <div style={{ textAlign: "right", fontSize: "32px" }}><button onClick={this.ShowCart} className="btn btn-primary">Cart ({this.calcAmountCart()})</button></div>
                <div>
                    <div className={styles.row}>
                        {this.renderListProduct()}
                    </div>
                    {this.state.SelectItem ? <ProductDetail SelectItem={this.state.SelectItem} /> : null}
                </div>
                {this.state.showcart && <Cart clearListCart={this.clearListCart} decreseCart={this.decreseCart} deleteCart={this.deleteCart} increaseCart={this.increaseCart} hide={this.HideCart} Listcart={this.state.ListCart} />}
            </div>
        )
    }
}
