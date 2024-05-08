window.onload = function() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        let productsHtml = "";
        for (let i = 0; i < data.length; i++) {

          let item = data[i];

          let product = `
            <div class="featuredkicks${i+1}">
            <img src="${item.img}" alt="productimg" class="images">
            <div class="text">
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            </div>
            </div>
          `;

          productsHtml += product;
        }


        let productsContainer = document.getElementsByClassName("box")[0]

        productsContainer.innerHTML = productsHtml;
      })
      
      .catch((error) => {
        console.error("Error fetching wheather data:", error);
      });

  };