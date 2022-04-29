import React from "react";
import "./App.css";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 100,
          title: "Watch",
          qty: 1,
          img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          id: 1,
        },
        {
          price: 100,
          title: "Mobile Phone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          id: 2,
        },
        {
          price: 100,
          title: "Laptop",
          qty: 1,
          img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);

    products[idx].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQty = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);

    if (products[idx].qty === 1) return;

    products[idx].qty -= 1;

    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getTotalPrice = () => {
    const { products } = this.state;
    let total = 0;

    products.forEach((product) => {
      total += product.price * product.qty;
    });

    return total;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <h1>Cart</h1>
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
          // total={this.getTotalPrice()}
        />
        <div style={{fontSize:'20px',padding:'10px'}}>TOTAL : {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
