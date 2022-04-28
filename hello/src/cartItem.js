import React from "react";

class CartItem extends React.Component {
  render() {
      // eslint-disable-next-line jsx-a11y/alt-text
      const newLocal_1 = <img style={styles.image} />;
      const newLocal = newLocal_1;
    return (
      <div className="cart-item">
        <div className="left-block">
          {newLocal}
        </div>

        <div className="right-block">
          <div style={{ fontSize: 25 }}>Phone</div>
          <div style={{ color: "#777" }}>Rs 999</div>
          <div style={{ color: "#777" }}>Qty : 1</div>
          <div className="cart-item-actions">
              <img alt="increase" className="action-icons" src="" />
              <img alt="decrease" className="action-icons" src="" />
              <img alt="delete" className="action-icons" src="" />
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
  },
};

export default CartItem;
