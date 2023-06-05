import axios from "axios";

const API = "http://128.199.234.179:3000/product/"

export async function createProduct(tokendata, product_data){
    try{
        const response = await axios.post(`${API}`, product_data, {
          headers: {
            Authorization: tokendata,
          },
        });
        if(response.status === 200){
          console.log(response.data);
          return response.data;
        }
      }catch(error){
        console.log(error);
      }
}

export async function getallproduct(tokendata){
    try {
        const response = await axios.get(`${API}`, {
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

export async function getproductbyid(tokendata,id){
    try {
        const response = await axios.get(`${API}${id}`,{
            headers:{
                Authorization: tokendata,
            },
        });
            if(response.status === 200){
                return response.data
            }
    } catch (error) {
        console.log(error)
    }
}

export async function updateproductbyid(tokendata,id,product_data){
    try {
        const response = await axios.patch(`${API}${id}`,product_data,{
            headers:{
                Authorization: tokendata,
            },
        })
        if(response.status === 200){
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export async function deleteproductbyid(tokendata,id){
    try {
        const response = await axios.delete(`${API}${id}`,{
            headers:{
                Authorization:tokendata,
            },
        })
        if(response.status === 200){
            return response.data
    }} catch (error) {
        console.log(error)
    }
}
