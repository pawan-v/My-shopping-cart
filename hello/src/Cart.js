import React from "react";
import CartItem from "./cartItem";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQty={props.onIncreaseQty}
            onDecreaseQty={props.onDecreaseQty}
            onDeleteProduct={props.onDeleteProduct}
          />
        );
      })}
      {/* <div style={styles.cartTotal}>Total : {props.total} </div> */}
    </div>
  );
};


// const styles = {
//   cartTotal :{
//     fontSize:'25px',
//     paddingLeft:'20px',
//     postition :'sticky'
//   }
// }

export default Cart;
