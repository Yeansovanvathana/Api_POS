import {React, useState, useEffect, useMemo} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import "../.././pages/styles/product.css";
import axios from 'axios'


const SearchBar = () => { 
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [filter, setFilter] = useState(data);

  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (search) => {
    const filters = search.target.value;
    console.log(filters)
  };

    useEffect(() => {
      setLoading(true)
      axios({
          method: 'GET',
          baseURL: 'https://dummyjson.com',
          url: '/products',
        })
          .then(({ data }) => {
            setFilter(data.products)
          })
          .catch(err => console.dir(err))
          .finally(() => setLoading(false))
    }, [])
    // Loading Process
    const Loading = () => {
      return(
        <>
         Laoding...
        </>
      );
    }
    
  return (
    <div>
      <div className="container">
        <div className="column">
          {/* Search Bar */}
          <div className="searchBar">
              <TextField 
              className= "searchTerm" 
              id="outlined-search" 
              label="Search Products" 
              type="search" 
              onChange={
                event => {setSearchTerm(event.target.value);
                }}
             />
          </div>
          
        </div>

          {/* <div className="ProductCard">
            {
              loading ? <Loading/> : <ShowProducts/>

            }
          </div> */}
        </div>
    </div>
  )

}

export default SearchBar