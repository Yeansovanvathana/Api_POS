import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
// Import product data
// import axios from "axios";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {getallproduct} from "../../service/products/products";


const columns = [
  { id: "product_name", label: "Product Name", minWidth: 170 },
  { id: "category_name", label: "Category", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 100 },
  { id: "quantity", label: "Quantity", minWidth: 100 },
  { id: "actions", label: "", maxWidth: 50 },
];
const tokendata = `Bearer ${window.localStorage.getItem("token")}`;

// Array.prototype.filter
export default function Product(search) {
  // const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [product_display, setproduct_display] = useState([]);

  async function Getallproductdetail(){
    try {
        console.log("tokendat",tokendata)
        const res = await getallproduct(tokendata);
        setProducts(res.data)
        setproduct_display(res.data)
        console.log("product ==",res.data)
    } catch (error) {
        console.log(error)
    }

    const searchHandler = (search) => {
      const filters = products.filter(({name}) => name.toLowerCase().includes(search));

      if(filters.length > 0){
        setproduct_display(filters);
      } else if(filters.length === 0){
        setproduct_display([])
      } else{
        setproduct_display(products);
      }
  };


  console.log("product_display",product_display)

  useEffect(() => {
    Getallproductdetail();
    // setLoading(true);
    // axios({
    //     method: "GET",
    //     baseURL: "http://128.199.234.179:3000",
    //     url: "/product",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    //     },
    // })
    //     .then(({ data }) => {
    //         setProducts(data.data);
    //     })
    //     .catch((err) => console.dir(err))
    //     .finally(() => setLoading(false));
}, []);

  return (
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
            {product_display.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.category.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.price}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.quantity}
                </TableCell>
                <TableCell component="th" scope="row">
                    <p>
                      <Button variant="text">
                        <EditIcon />
                      </Button>
                      <Button variant="text">
                        <DeleteIcon />
                      </Button>
                    </p>
                </TableCell>
              </TableRow>
            ))
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}}