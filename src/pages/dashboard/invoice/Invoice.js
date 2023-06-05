import { React, useState } from "react";
import "../.././styles/invoice.css";
// import components
import Products from "../../../components/invoice/Product";
import InvoicePaper from "../../../components/invoice/InvoicePaper";
// import material
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import icons
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";

// --------------------------------------------------------------

export const historyData = [];

const Invoice = (props) => {
  const [popup, setPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [paymentType, setPaymentType] = useState("Cash");
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const disPrice = itemsPrice * (parseInt(discount) / 100);
  const totalPrice = itemsPrice - disPrice;
  const [cashReceived, setCashReceived] = useState(0);
  const cashExchange = cashReceived - totalPrice;
  const [paid, setPaid] = useState(false);

  const options = [
    {
      value: "Cash",
      label: "Cash",
    },
    {
      value: "ABA",
      label: "ABA",
    },
  ];

  // Handling Payment

  function setSessionTime(current_time) {
    const [time, modifier] = current_time.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}${minutes}`;
  }

  function setDateTime(current_time) {
    const [time, modifier] = current_time.split(" ");
    let [hours, minutes, seconds] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}:${seconds}`;
  }

  const handlePayment = () => {
    if (
      cashReceived !== null &&
      cashReceived > 0 &&
      cashReceived >= totalPrice &&
      !paid
    ) {
      setPopup(true);
      setPaid(true);

      const date = new Date();

      const localTime = date.toLocaleTimeString();

      const dateTime = setDateTime(localTime);
      const sessionTime = setSessionTime(localTime);

      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDay()).padStart(2, "0");

      const invoiceForm = {
        id: `${year}-${month}-${String(date.getTime()).substr(4)}`, // string
        session: `POS/${year}/${month}/${day}/${sessionTime}`, // string
        date_added: `${day}/${month}/${year.substr(-2)}/${dateTime}`, // string
        customerName: customerName, // string
        itemPrice: itemsPrice, // number
        totalPrice: totalPrice, // number
        discount: discount,
        cashReceived: cashReceived,
        cashExchange: cashExchange,
        product: cartItems, // cartItem is an array
        payment_type: paymentType, // string
        status: !paid, // boolean
      };

      historyData.push(invoiceForm);

      console.log(historyData);
      // const response = fetch("http://128.199.234.179:3000/product-invoice", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      //   },
      //   body: JSON.stringify(invoiceForm),
      // });
    }
  };
  // Next order fuction
  const handleNextOrder = () => {
    setCartItems([]);
    setPopup(false);
    setCustomerName("");
    setPaid(false);
    setDiscount(0);
    setCashReceived(0);
  };
  // print function
  const handlePrint = () => {
    const printableElements = document.getElementById("printme").innerHTML;
    const orderHtml =
      "<html><head><title></title></head><body>" +
      printableElements +
      "</body></html>";
    document.getElementById("print-div").innerHTML = orderHtml;
    window.print();
  }; // Increase Item in cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log(cartItems);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  // Decrease Item in cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <div className="Content">
        <div className="productList">
          {popup ? (
            <div className="center">
              <div className="row1">
                <button onClick={() => handlePrint()} className="Btn">
                  Print
                </button>
                <button onClick={() => handleNextOrder()} className="Btn">
                  Next Order
                </button>
              </div>
              <InvoicePaper
                printID="printme"
                customerName={customerName}
                cartItems={cartItems}
                itemsPrice={itemsPrice}
                discount={discount}
                totalPrice={totalPrice}
                cashReceived={cashReceived}
                cashExchange={cashExchange}
              />
            </div>
          ) : (
            <Products onAdd={onAdd} />
          )}
        </div>

        <div className="invoiceField">
          <aside className="block col-1">
            {/* Customer Name Input Field */}
            <div className="customer-name">
              <Stack direction="row" spacing={2}>
                <TextField
                  value={customerName}
                  onChange={(cName) => setCustomerName(cName.target.value)}
                  helperText="Enter Customer Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonAddAlt1Icon className="customerIcon" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
                <TextField
                  select
                  defaultValue="Cash"
                  onChange={(e) => setPaymentType(e.target.value)}
                  helperText="Select your Payment Method"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {paymentType === "Cash" ? (
                          <MonetizationOnIcon />
                        ) : (
                          <CreditCardIcon />
                        )}
                      </InputAdornment>
                    ),
                  }}
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
            </div>
            {/* Table Column Name */}
            <div className="row TableText">
              <div className="col-2 ColumnData">Product</div>
              <div className="col-2 ColumnText">Quantity</div>
              <div className="col-2 ColumnText">Unit Price</div>
              <div className="col-2 ColumnText">Total</div>
            </div>
            <div>
              {cartItems.length === 0 && (
                <div className="EmptyText">Cart is empty</div>
              )}
              {/* Each cartItem */}
              {cartItems.map((item) => (
                <div key={item.id} className="row">
                  {/* Product Name */}
                  <div className="col-2 ItemTitle">{item.name}</div>
                  <div className="col-2">
                    {/* Remove qty */}
                    <button onClick={() => onRemove(item)} className="remove">
                      {" "}
                      –{" "}
                    </button>
                    {" " + item.qty + " "}
                    {/* Add qty */}
                    <button onClick={() => onAdd(item)} className="add">
                      {" "}
                      +{" "}
                    </button>
                  </div>

                  {/* Item Unit Price */}
                  <div className="col-1 text-right">${item.price}</div>

                  {/* Total Price of Each Item */}
                  <div className="col-2 text-right">
                    ${item.qty * item.price}
                  </div>
                </div>
              ))}

              {/* Total Area */}
              {cartItems.length !== 0 && (
                <>
                  {/* SubTotal */}
                  <div className="row">
                    <div className="col-2">Sub Total</div>
                    <div className="col-1 text-right">
                      ${itemsPrice.toFixed(2)}
                    </div>
                  </div>

                  {/* Discount Input  */}
                  <div className="row">
                    <div className="col-2">Discount</div>
                    <div className="col-1 text-right">
                      %{" "}
                      <input
                        type="number"
                        className="discount"
                        value={discount}
                        onChange={(val) => setDiscount(val.target.value)}
                      />
                    </div>
                  </div>

                  {/* Cash Received Input  */}
                  <div className="row">
                    <div className="col-2">Cash Received</div>
                    <div className="col-1 text-right">
                      ${" "}
                      <input
                        value={cashReceived}
                        type="number"
                        className="discount"
                        onChange={(event) =>
                          setCashReceived(event.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Cash Received Input  */}
                  <div className="row">
                    <div className="col-2">Cash Exchange</div>
                    <div className="col-1 text-right">
                      $ {cashExchange.toFixed(2)}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="row">
                    <div className="col-2">
                      <strong>Total</strong>
                    </div>
                    <div className="col-1 text-right">
                      <strong>${totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>

                  {/* Payment Button */}
                  <div className="row">
                    <Button
                      variant="contained"
                      disabled={
                        !(
                          cashReceived !== null &&
                          cashReceived > 0 &&
                          cashReceived >= totalPrice &&
                          !paid
                        )
                      }
                      onClick={() => handlePayment()}
                      size="large"
                      fullWidth={true}
                    >
                      Payment
                    </Button>
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
