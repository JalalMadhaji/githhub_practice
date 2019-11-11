const getallproducts = async () => {
    const base = "http://localhost:3000/product";
    const response = await fetch(base);
    const data = await response.json();
    return data;
  };
