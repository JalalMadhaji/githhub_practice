// const getallproducts = async () => {
//   const base = "http://localhost:3000/product";
//   const response = await fetch(base);
//   const data = await response.json();
//   return data;
// };
// fetch("http://localhost:3000/product")
//   .then(response => response.json())
//   .then(function (data) {
//     console.log(data)

//     for (const key in data) {
//       if (data.hasOwnProperty(key)) {
//         const element = data[key];
//         console.log(element)
//         let up = document.getElementById("up");
//         let u1 = document.createElement("div")
//         u1.className = "u1 col-fl-md-4 "
//         let img = document.createElement("img")
//         let h1 = document.createElement("h1");
//         h1.innerHTML = element.Name;
//         img.setAttribute("src", "./img/pictures/" + element.server_image_path);
//         u1.appendChild(img)
//         up.appendChild(u1)
//         u1.appendChild(h1)


//       }
//     }
//   })

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
