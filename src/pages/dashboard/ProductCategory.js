import "../styles/ProductCategory.css";
import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CategoryList from "../../components/ProductCategory/CategoryList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProductCategory = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            baseURL: "http://128.199.234.179:3000",
            url: "/product-catagories",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
        })
            .then(({ data }) => {
                setProducts(data.data);
            })
            .catch((err) => console.dir(err))
            .finally(() => setLoading(false));
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        const headers = {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        };
        const response = await axios.post(
            "http://128.199.234.179:3000/product-catagories",
            JSON.stringify({
                name: text,
            }),
            { headers: headers }
        );
        console.log(response);
        handleClose()
        window.location.reload(true)
    };

    return (
        <div>
            <div className="btn">
                <Button
                    variant="outlined"
                    style={{ marginRight: "7rem" }}
                    onClick={() => {
                        navigate("/products");
                    }}
                >
                    All Products
                </Button>

                <Button variant="contained">Categorie</Button>

                <Button
                    variant="contained"
                    style={{
                        position: "absolute",
                        right: "0",
                        marginRight: "1rem",
                    }}
                    onClick={handleClickOpen}
                >
                    Add Categorie
                </Button>
            </div>
            <div style={{ marginTop: "2rem" }}>
                {products.map((p) => {
                    return <CategoryList name={p.name} />;
                })}
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: "30%",
                    },
                }}
            >
                <DialogTitle
                    sx={{ m: 0, pt: 4, fontWeight: "bold", fontSize: 32 }}
                >
                    Category Name
                    {
                        <Button
                            aria-label="close"
                            onClick={handleSubmit}
                            sx={{
                                position: "absolute",
                                right: 8,
                                top: 8,
                            }}
                            variant="contained"
                        >
                            Save
                        </Button>
                    }
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Sumsung"
                        type="text"
                        id="outlined-basic"
                        variant="outlined"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProductCategory;
