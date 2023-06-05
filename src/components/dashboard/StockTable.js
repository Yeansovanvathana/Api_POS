import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Import mock data
import { StockList } from "../../mock_data/StockList";

const columns = [
  { id: "product_name", label: "Product Name", minWidth: 170 },
  { id: "product_id", label: "Product ID", minWidth: 100 },
  { id: "date_added", label: "Date Added", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 100 },
  { id: "min_stock", label: "Min Stock", minWidth: 100 },
  { id: "max_stock", label: "Max Stock", minWidth: 100 },
  { id: "quantity", label: "Quantity", minWidth: 100 },
  { id: "actions", label: "", maxWidth: 50 },
];

export default function StockTable() {

  return (
    <Paper sx={{ width: "100%", overflow: "auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
            {StockList.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
