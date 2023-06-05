import React from 'react'
import '../.././pages/styles/invoice.css'
const InvoicePaper = (props) => {
  var today = new Date();
  var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' +today.getFullYear();

  return (
    <>
    <div className="center" style={{backgroundColor: '#fff'}}>
      <div id={props.printID} style={{padding: "20px 15px"}}>       
        <div className="row1" >
          <div className="mar-right20">
            <strong>Customer : </strong>
          </div>
          <div className="col-1 text-center">
            <strong>{props.customerName}</strong>
          </div>
        </div>
        {/* Date */}
        <div className="row1">
          <div className="mar-right50">
            <strong>Date: </strong>
          </div>
          <div className="col-1 text-center">
            <strong>{date}</strong>
          </div>
        </div>

        {/* Receipt Text */}
        <div className="row">
            <h2>Receipt</h2>
        </div>

        <div className="row TableText">
          <div className="col-2 ">Product</div>
          <div className="col-2 ">Qty</div>
          <div className="col-2 ">Unit Price</div>
          <div className="col-2 ">Sub Total</div>
        </div>

        {/* Each cartItem */}
        {props.cartItems.map((item) => (
          
          <div key={item.id} className="row TableText">
            {/* Product Name */}
            <div className="col-2">{item.name}</div>
            <div className="col-2"> 
              {item.qty}
            </div>

            {/* Item Unit Price */}
            <div className="col-2">
              ${item.price}
            </div>

            {/* Total Price of Each Item */}
            <div className="col-2">
              ${item.qty * item.price}
            </div>
          </div>
        ))}
        <br /><br /><br />
        
        {props.cartItems.length !== 0 && (
          <>
            {/* SubTotal */}
            <div className="row">
              <div className="col-2">Sub Total</div>
              <div className="col-1 text-right">${props.itemsPrice.toFixed(2)}</div>
            </div>

            {/* Discount %  */}
            <div className="row">
              <div className="col-2">Discount</div>
              <div className="col-1 text-right">
                % {props.discount}
              </div>
            </div>

            {/* Total */}
            <div className="row">
              <div className="col-2">
                <strong>Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${props.totalPrice.toFixed(2)}</strong>
              </div>
            </div>

            {/* Cash Received */}
            <div className="row">
              <div className="col-2">
                <strong>Cash Received</strong>
              </div>
              <div className="col-1 text-right">
                <strong> $ {props.cashReceived}</strong>
              </div>
            </div>

            {/* Cash Change */}
            <div className="row">
              <div className="col-2">
                <strong>Cash Change</strong>
              </div>
              <div className="col-1 text-right">
                <strong> $ {props.cashExchange.toFixed(2)}</strong>
              </div>
            </div>
            
            {/* Thank You */}
            <div className="row">
              <h1>Thank You!</h1>
            </div>
          </>
        )} 

      </div>
    </div>
    </>
  )
}

export default InvoicePaper
