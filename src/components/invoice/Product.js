import { React, useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import "../.././pages/styles/invoice.css";
import axios from "axios";

const Products = (props) => {
  const { onAdd } = props;
  const categoriesList = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const [category, setCategory] = useState("");

  const [filter, setFilter] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  // const File_Url = File_Url;
  // Fetch Data from api
  const File_Url = "http://128.199.234.179:7000"
  
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "http://128.199.234.179:3000",
      url: "/product",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then(({ data }) => {
        console.log("data", data);
        setFilter(data.data);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
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
        setCategoryList(data.data);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, []);

  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  // Loading Process
  const Loading = () => {
    return <>Loading...</>;
  };

  // Show Product
  const ShowProducts = () => {
    return (
      <>
        <Grid container sx={{ backgroundColor: "" }} spacing={1}>
          {!!filter && filter.length > 0 ? (
            filter
              .filter((product) => {
                if (searchTerm === "" && category === "") {
                  return product;
                } else if (searchTerm === "" && category !== "") {
                  return (
                    String(product["category"].name).toLowerCase() ===
                    category.toLowerCase()
                  );
                } else if (searchTerm !== "" && category === "") {
                  return product.name.includes(searchTerm);
                } else if (searchTerm !== "" && category !== "") {
                  return (
                    String(product["category"].name).toLowerCase() ===
                      category.toLowerCase() &&
                    product.name.includes(searchTerm)
                  );
                }
              })
              .map((product) => {
                return (
                  <>
                    {/* <Grid key={product.id} item xs={20} sm={6} md={3}> */}
                    <Grid key={product.id} item xs={12} sm={4} md={5} lg={3}>
                      <Card
                        sx={{ maxWidth: 380, objectFit: "cover" }}
                        className="MuiCard-root"
                        onClick={() => onAdd(product)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="170"
                            image={product.image !=null? File_Url + "/" +product.image : File_Url + "/uploads/POS/product//63c97b19ab42c.jpeg" } 
                            alt="cards"
                          />
                          <CardContent>
                            <div className="ContentRow">
                              <div className="Row1">
                                <Typography>{product.name}</Typography>
                                <Typography
                                  sx={{
                                    color: "#0000FF",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                  }}
                                >
                                  $ {product.price}{" "}
                                </Typography>
                              </div>
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </>
                );
              })
          ) : (
            <div className="NoProduct">
              <p> No Product To Display</p>
            </div>
          )}
        </Grid>
      </>
    );
  };
  return (
    <Container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className="SearchField">
          <TextField
            id="outlined-search"
            label="Search Products"
            type="search"
            fullWidth={true}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <div className="horizontal-scroll">
          <KeyboardDoubleArrowLeftIcon
            className="scroll"
            onClick={() => {
              sideScroll(categoriesList.current, 25, 100, -270);
            }}
          />
          <div className="category-list">
            <div className="category-list" ref={categoriesList}>
              <Stack fullWidth={true} direction="row" spacing={2}>
                <Button
                  value=""
                  onClick={() => setCategory("")}
                  variant="outlined"
                >
                  All
                </Button>
                {categoryList.map((val, key) => {
                  return (
                    <Button
                      value={val.name}
                      onClick={() => setCategory(val.name)}
                      variant="outlined"
                    >
                      {val.name}
                    </Button>
                  );
                })}
              </Stack>
            </div>
          </div>
          <KeyboardDoubleArrowRightIcon
            className="scroll"
            onClick={() => {
              sideScroll(categoriesList.current, 25, 100, 270);
            }}
          />
        </div>

        <div className="ProductCard">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </Grid>
    </Container>
  );
};

export default Products;
