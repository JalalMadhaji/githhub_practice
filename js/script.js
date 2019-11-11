let products = document.getElementById("products");
const getallproducts = async () => {
  const base = "http://localhost:3000/product";
  const response = await fetch(base);
  const data = await response.json();

  return data;
};

getallproducts().then(data => {
  data.forEach(element => {
    let div = document.createElement("div");
    let name = document.createElement("h4");
    let price = document.createElement("span");
    let para = document.createElement("p");
    let img = document.createElement("img");
    let button = document.createElement("button");
    img.src = "img/pictures/" + element.server_image_path;
    button.innerHTML = "Buy Now";
    name.innerHTML = element.Name.substring(1, 20);
    price.innerHTML = "$" + element.price;
    para.innerHTML = element.description.substring(1, 20);
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(para);
    div.appendChild(price);
    div.appendChild(button);
    products.appendChild(div);
  });
});
