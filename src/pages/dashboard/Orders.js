import React from "react";
import OrderHistorys from "../../components/Orders/OrderHistory";
import "../styles/product.css";

const Orders = () => {
  return (
    <div>
      <main>
        <section style={{padding: '30px 0'}}>
          <OrderHistorys />
        </section>
      </main>
    </div>
  );
};

export default Orders;
