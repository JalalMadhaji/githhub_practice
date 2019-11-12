
document.getElementById("addProductForm").addEventListener("submit",e=>{
    e.preventDefault();
    let productName = document.getElementById("productName");
    let price = document.getElementById("price");
    let description = document.getElementById("description");
    let imgName = document.getElementById("imgName");

    console.log(productName.value);
    console.log(price.value);
    fetch("http://localhost:3000/product",{
        method: 'post',
        body: JSON.stringify({
            
            Name : productName.value,
            price : price.value,
            description : description.value,
            server_image_path : `${imgName.value}.jpg`,

        }),
        headers: {
            Accept: "application/json, text/plain, /",
            "Content-Type": "application/json"
        }
    })
    .then(response=>response.json())
    .then(json => {
        console.log(json);
    })
    .catch(e => {
        console.log("error");
    })

});
