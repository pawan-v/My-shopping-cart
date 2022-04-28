import React from "react";
import CartItem from "./cartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 9999,
          title: "Mobile Phone",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 99999,
          title: "Laptop",
          qty: 5,
          img: "",
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

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQty={this.handleIncreaseQty}
              onDecreaseQty={this.handleDecreaseQty}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
