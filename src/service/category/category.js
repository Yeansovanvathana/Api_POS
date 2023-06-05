import axios from "axios";

const API = "http://128.199.234.179:3000/product-catagories"

export async function getallcategory(tokendata){
    try {
        const response = await axios.get(`${API}/`, {
            headers: {
              Authorization: tokendata,
            },
          });
          if(response.status === 200){
            console.log(response.data);
            return response.data;
          }
    } catch (error) {
        console.log(error)
    }
}