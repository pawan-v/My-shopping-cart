import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
  }

  increseQuantity = () => {
    console.log("increse", this);
  }

  render() {
    // eslint-disable-next-line jsx-a11y/alt-text
    const newLocal_1 = <img style={styles.image} />;
    const { prices, title, qty } = this.state;
    const newLocal = newLocal_1;

    return (
      <div className="cart-item">
        <div className="left-block">{newLocal}</div>

        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {prices}</div>
          <div style={{ color: "#777" }}>Qty : {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={this.increseQuantity.bind(this)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#777",
  },
};

export default CartItem;
