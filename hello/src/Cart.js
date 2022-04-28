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

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
          <CartItem 
            product={product} 
            key={product.id} 
         />
          );
        })}
      </div>
    );
  }
}

export default Cart;
