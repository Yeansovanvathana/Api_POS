import React from "react";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
// Import Components
import { Product } from "../../components/dashboard/Product";
import Card from "../../components/dashboard/Card";
import StockTable from "../../components/dashboard/StockTable";
// Import mock data
import { ProductList } from "../../mock_data/ProductList";
import { SalesInfo } from "../../mock_data/SalesInfo";
// Import MUI
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "@mui/material/Button";
// import Grid from '@mui/material/Grid';

const Dashboard = () => {
  const navigate = useNavigate();
  const productList = React.useRef(null);
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
  return (
    <div className="dashboard">
      <header>
        {SalesInfo.map((val, key) => {
          return (
            <Card
              key={key}
              title={val.title}
              icon={val.icon}
              amount={val.amount}
            />
          );
        })}
      </header>

      <main>
        <section className="top-selling-products">
          <h2>Top Selling Products</h2>

          <div className="horizontal-scroll-dashboard">
            <div className="buttons">
              <KeyboardDoubleArrowLeftIcon
                className="scroll"
                onClick={() => {
                  sideScroll(productList.current, 25, 100, -270);
                }}
              />
              <KeyboardDoubleArrowRightIcon
                className="scroll"
                onClick={() => {
                  sideScroll(productList.current, 25, 100, 270);
                }}
              />
            </div>
            <div className="product-list" ref={productList}>
              {ProductList.map((val, key) => {
                return (
                  <Product
                    key={key}
                    name={val.name}
                    category={val.category}
                    price={val.price}
                    image={val.img}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/invoice");
            }}
          >
            Start New Sale
          </Button>
        </section>

        <section className="stock-report">
          <h2>Top Selling Products</h2>
          <StockTable />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
