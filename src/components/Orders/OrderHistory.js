import { React, useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
// import service
import { getAllInvoices } from "../../service/order_history/order_history";
//import data
import { historyData } from "../../pages/dashboard/invoice/Invoice";
// import component
import OrderInfo from "../../components/Orders/OrderInfo";
import InvoicePaper from "../invoice/InvoicePaper";
// ---------------------------------------------------------

const columns = [
  { id: "orderId", label: "Order ID", minWidth: 100 },
  { id: "session", label: "Session", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "customerName", label: "Customer Name", minWidth: 100 },
  { id: "total", label: "Total", minWidth: 100 },
  { id: "status", label: "Status", maxWidth: 50 },
];

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// Array.prototype.filter orderId: 0001,
export default function OrderHistorys() {
  const [currentOrder, setCurrentOrder] = useState('');
  const [showOrder, setShowOrder] = useState(false);

  function handleClose() {
    setShowOrder(false);
    window.history.replaceState({currentOrder}, "", "/orders");
  }

  function handleOrderLink(e, order) {
    e.preventDefault();
    setCurrentOrder(order);
    console.log(currentOrder)
    setShowOrder(true);
    window.history.replaceState({}, "", `/orders/${order.id}`);
  }

  // const tokendata = `Bearer ${window.localStorage.getItem("token")}`;

  // async function getInvoices() {
  //   try {
  //     const { data } = await getAllInvoices(tokendata);
  //     setOrders(data);
  //     console.log(orders);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getInvoices();
  // }, []);

  return (
    <>
      {!showOrder ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
                {historyData.map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell onClick={() => {}} component="th" scope="row">
                      <Link
                        href={`/${order.id}`}
                        onClick={(e) => {
                          handleOrderLink(e, order);
                        }}
                        color="inherit"
                        underline="hover"
                      >
                        {order.id}
                      </Link>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.session}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.date_added}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.customerName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.totalPrice}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {order.status ? "paid" : "cancelled"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <div>
          <OrderInfo order={currentOrder} close={handleClose} />
        </div>
      )}
    </>
  );
}
