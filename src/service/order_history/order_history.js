import axios from "axios";

const API = "http://128.199.234.179:3000/product-invoice/";

export async function createInvoice(tokendata, invoice_data) {
  try {
    const response = await axios.post(`${API}`, invoice_data, {
      headers: {
        Authorization: tokendata,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAllInvoices(tokendata) {
  try {
    const response = await axios.get(`${API}`, {
      headers: {
        Authorization: tokendata,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
