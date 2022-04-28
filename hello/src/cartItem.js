import React from "react";

class CartItem extends React.Component {
  render() {
    // eslint-disable-next-line jsx-a11y/alt-text
    const newLocal_1 = <img style={styles.image} />;
    const newLocal = newLocal_1;

    const { price, title, qty } = this.props.product;

    return (
      <div className="cart-item">
        <div className="left-block">{newLocal}</div>

        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs : {price}</div>
          <div style={{ color: "#777" }}>Qty : {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={() => this.props.onIncreaseQty(this.props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              //   onClick={() => this.props.onDecreaseQty(this.props.product)}
              onClick={() => this.props.onDecreaseQty(this.props.product)}
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
