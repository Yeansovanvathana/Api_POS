import { React } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import "../.././pages/styles/orderInfo.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "products", label: "Products", minWidth: 170 },
  { id: "quantity", label: "Quantity", minWidth: 100 },
  { id: "uom", label: "UoM", minWidth: 100 },
  { id: "unit_price", label: "Unit Price", minWidth: 100 },
  { id: "discount", label: "Discount", maxWidth: 50 },
  { id: "taxs", label: "Taxs", maxWidth: 50 },
  { id: "sub_total", label: "Sub Total w/o Taxes", maxWidth: 50 },
];

const OrderInfo = (props) => {
  function handlePrint() {
    console.log('print')
    // const printableElements = document.getElementById("printOrder").innerHTML;
    // const orderHtml =
    //   "<html><head><title></title></head><body>" +
    //   printableElements +
    //   "</body></html>";
    // document.getElementById("print-div").innerHTML = orderHtml;
    // window.print();
  }
  return (
    <div>
      <div className="">
        {/* Line1 order history */}
        <div className="row">
          <div className="col-1 backBtn" id="Order" onClick={props.close}>
            <ArrowBackIosIcon className="icon" />
            <span>Order History</span>
          </div>

          <div className="row button">
            <Button variant="contained" className="Btn">
              Download PDF
            </Button>
            <Button
              onClick={() => props.printOrder}
              variant="contained"
              className="Btn"
            >
              Print Receipt
            </Button>
          </div>
        </div>

        {/* Line2  Order ID*/}
        <div className="row">
          {/* Order ID Session Payment */}
          <div className="col-1">
            <div id="textInfo">
              <h1>Order ID</h1>
              <p>{props.order.id}</p>
            </div>

            <div id="textInfo">
              <h1>Session</h1>
              <p>{props.order["session"]}/</p>
            </div>

            <div id="textInfo">
              <h1>Payment</h1>
              <p>{props.order.payment_type}</p>
            </div>
          </div>
          {/* Date Customer Status */}
          <div className="col-1">
            <div id="textInfo">
              <h1>Date</h1>
              <p>{props.order.date_added}</p>
            </div>

            <div id="textInfo">
              <h1>Customer</h1>
              <p>{props.order.customerName}</p>
            </div>

            <div id="textInfo">
              <h1>Status</h1>
              <p> Paid</p>
            </div>
          </div>
        </div>
        <Paper sx={{ width: "90%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 1000 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ width: "auto" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.order.product.map((item) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.qty}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Pcs
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.price}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      % {props.order.discount}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      % 0
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.qty * item.price - item.qty * item.price *(props.order.discount/100)}
                    </TableCell>
                  </TableRow>  
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <div className="row" id='Total'>
          <div className="col-1">
            <div id='textInfo' className="Tax">
              <h1>Tax : </h1>
              <p>% 0</p>
            </div>

            <div id='textInfo' className="Total">
              <h1>Total :</h1>
              <p>$ {props.order.totalPrice}</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default OrderInfo;
