import React from "react";
import "../../styles/product.css";
// import SearchBar from "../../../components/product/SearchBar";
import Button from "@mui/material/Button";
// import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from '@mui/material/Box';
import MenuItem from "@material-ui/core/MenuItem";
import { useEffect } from "react";
import {useState} from 'react'
import { createProduct, getallproduct,getproductbyid,updateproductbyid,deleteproductbyid } from "../../../service/products/products";
import {getallcategory} from "../../../service/category/category";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
    { id: "product_name", label: "Product Name", minWidth: 170 },
    { id: "category_name", label: "Category", minWidth: 100 },
    { id: "price", label: "Price", minWidth: 100 },
    { id: "quantity", label: "Quantity", minWidth: 100 },
    { id: "actions", label: "", maxWidth: 50 },
  ];

const Products = () => {
    // const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [open_edit, setopen_edit] = React.useState(false);
    const [Product_list, setProduct_list] = useState([])
    const [product_display, setproduct_display] = useState([]);
    const [Edit_id, setEdit_id] = useState()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickEditOpen = () => {
        setopen_edit(true);
    }
    const SetEditId = (id) => {
        setEdit_id(id)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditClose = () => {
        setopen_edit(false);
    }

    const [Product_data, setProduct_data] = useState({
        name: "",
        price: "",
        min_stock: "",
        max_stock: "",
        barcode: "",
        quantity: "",
        category_id: "1"
    })

    const [product_data_edit,setproduct_data_edit] = useState([])
    // const [search_text, sestsearch_text]= useState()

    const [category_data, setcategory_data] = useState([])
    const tokendata = `Bearer ${window.localStorage.getItem("token")}`;

    const handleChange = (e) => {
        setProduct_data({...Product_data, [e.target.name]:e.target.value});
    }

    const handleChangeEdit = (e) => {
        setproduct_data_edit({...product_data_edit,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log("product",Product_data);

        try{
            const res = await createProduct(tokendata,Product_data)
            window.location.reload(true)
        
        }catch(error){
            console.log(error)
        }}

        console.log(category_data)
        console.log(Product_data)
    
    async function getallcategorydetail(){
        try {
            const res = await getallcategory(tokendata);
            console.log("category", res);
            setcategory_data(res.data);
        } catch (error) {
            
        }
    }

    async function getallproductdetail(){
        try {
            console.log("tokendat",tokendata)
            const res = await getallproduct(tokendata);
            setProduct_list(res.data)
            setproduct_display(res.data)
            console.log("product ==",res.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function getproductbyiddetail(id){
        try {
          const res = await getproductbyid(tokendata,id)
          setproduct_data_edit(res.data)
          console.log("id of edit ",res.data)
        } catch (error) {
          console.log(error)
        }
       
    }

    async function updateproductbyiddetail(){
        try {
            console.log("update",tokendata,Edit_id,product_data_edit)
            const res = await updateproductbyid(tokendata,Edit_id,product_data_edit)
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteproductbyiddetail(id){
        try {
            console.log("id delete",id)
            const res = await deleteproductbyid(tokendata, id)
            window.location.reload(true)
        } catch (error) {
            console.log(error)
        }
    }

    const searchHandler = (search) => {
        const filters = Product_list.filter(({name}) => name.toLowerCase().includes(search.target.value.toLowerCase()));

        if(filters.length > 0){
            setproduct_display(filters);
        } else if(filters.length === 0){
            setproduct_display([])
        } else{
            setproduct_display(Product_list);
        }
    };

    const EditProduct = (id) => {
        getproductbyiddetail(id)
        SetEditId(id)
    }



    console.log("product list hzhzh", Product_list)

    useEffect(() => {
        getallcategorydetail();
        getallproductdetail();
     },[]);

    return (
        <div>
            <header>
            <h2>All Products</h2>
            </header>
            <main>
            <section className="buttons">
                <Button variant="contained"  onClick={handleClickOpen}>
                    Add Product
                </Button>
                </section>
                <section>
                {/* <SearchBar/> */}
                <div className="column">
                    {/* Search Bar */}
                    <div className="searchBar">
                        <TextField 
                        className= "searchTerm" 
                        id="outlined-search" 
                        label="Search Products" 
                        type="search" 
                        // onChange={
                        //     event => {setSearchTerm(event.target.value);
                        //     }}
                        onChange={searchHandler}
                        />
                    </div>
                    
                    </div>
                </section>
                <section className="product-list">
                {/* <Product search={search_text} /> */}

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
                                        <EditIcon onClick={() => {
                                        handleClickEditOpen()
                                        EditProduct(row.id)
                                        
                                       }} />
                                    </Button>
                                    <Button variant="text">
                                        <DeleteIcon onClick={() => {deleteproductbyiddetail(row.id)}} />
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
                </section>
            </main>
            <Dialog
                open={open}
                onClose={handleClose}

            >
                <DialogTitle sx={{ m: 0, pt: 4, ml:{xs: 15, md:15}, fontWeight: 'bold',fontSize: { xs: 16, md: 32 }}}>
               
                Create Product Name
                </DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, p:7, pt:0, pb:3}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="product_name"   
                            label="Product Name"
                            name="name"
                            type="text"
                            onChange={handleChange}
                        />
                        <TextField 
                            id="category_id" 
                            name="category_id" 
                            label="category" 
                            value={Product_data.category_id}
                            onChange={handleChange} 
                            select>
                            {category_data.map((i, index) => ( 
                                <MenuItem key={index} value={i.id}>{i.name}</MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="price"
                            label="Price"
                            type="number"
                            id="price"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="min_stock"
                            label="min_stock"
                            type="number"
                            id="min_stock"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="max_stock"
                            label="max_stock"
                            type="number"
                            id="max_stock"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="quantity"
                            label="quantity"
                            type="number"
                            id="quantity"
                            onChange={handleChange}
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleClose}
                        >
                        Create
                        </Button>
                        
                    </Box>
                </DialogContent>
            </Dialog>

        {/* handle Edit product */}
            <Dialog
                open={open_edit}
                onClose={handleEditClose}

            >
                <DialogTitle sx={{ m: 0, pt: 4, ml:{xs: 15, md:15}, fontWeight: 'bold',fontSize: { xs: 16, md: 32 }}}>
               
                Edit Product Name {Edit_id}
                </DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={updateproductbyiddetail} noValidate sx={{ mt: 1, p:7, pt:0, pb:3}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="product_name"   
                            
                            name="name"
                            value={product_data_edit.name}
                            type="text"
                            onChange={handleChangeEdit}
                        />
                        <TextField 
                            id="category_id" 
                            name="category_id" 
                             
                            value={product_data_edit.category_id}
                            onChange={handleChangeEdit} 
                            select>
                            {category_data.map((i, index) => ( 
                                <MenuItem key={index} value={i.id}>{i.name}</MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="price"
                            value={product_data_edit.price}
                            
                            type="number"
                            id="price"
                            onChange={handleChangeEdit}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={product_data_edit.min_stock}
                            name="min_stock"
                            
                            type="number"
                            id="min_stock"
                            onChange={handleChangeEdit}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={product_data_edit.max_stock}
                            name="max_stock"
                            
                            type="number"
                            id="max_stock"
                            onChange={handleChangeEdit}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={product_data_edit.quantity}
                            name="quantity"
                            
                            type="number"
                            id="quantity"
                            onChange={handleChangeEdit}
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleEditClose}
                        >
                        Update
                        </Button>
                        
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
 
export default Products;