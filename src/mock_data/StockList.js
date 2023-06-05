import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const StockList = [
  {
    product_name: "Macbook Pro",
    product_id: "0019",
    date_added: "10/08/2022",
    price: 899,
    min_stock: 15,
    max_stock: 150,
    quantity: 150,
    actions: (
      <p>
        <Button variant="text">
          <EditIcon />
        </Button>
        <Button variant="text">
          <DeleteIcon />
        </Button>
      </p>
    ),
  },
  {
    product_name: "Iphone 14 Pro Max",
    product_id: "0225",
    date_added: "10/08/2022",
    price: 2000,
    min_stock: 15,
    max_stock: 150,
    quantity: 150,
    actions: (
      <p>
        <Button variant="text">
          <EditIcon />
        </Button>
        <Button variant="text">
          <DeleteIcon />
        </Button>
      </p>
    ),
  },
];
