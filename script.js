var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/products");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const datas = JSON.parse(xhr.responseText);

      datas.products.forEach((data) => {
        var title = document.createElement("h1");
        title.innerHTML = data.title;
        document.querySelector(".title-h1").appendChild(title);

        var card = document.createElement("div");
        card.classList.add("card");
        card.style = "width: 18rem;";

        document.querySelector(".container").appendChild(card);
        console.log(data.variants);
        data.options.forEach(function (option) {
          var size = document.createElement("span");
          size.innerHTML = option.name;
          card.appendChild(size);
        });
        console.log(data.variants);

        data.images.forEach((image) => {
          var img = document.createElement("img");
          img.classList.add("img-product");
          img.classList.add("card-img-top");
          img.style = "width: 18rem";
          img.src = image.src;
          card.appendChild(img);

          var desc = document.createElement("h5");
          desc.classList.add("card-desc");
          desc.innerHTML = image.alt;
          card.appendChild(desc);
        });

        data.variants.forEach(function (variant) {
          console.log(data.variant);
          var sizeColor = document.createElement("button");
          sizeColor.classList.add("btn-outline-success");
          sizeColor.value = variant.title;

          sizeColor.innerHTML = variant.title;
          card.appendChild(sizeColor);
        });
      });
    }
  }
};
xhr.send();

// $.ajax("/products").done(function (data) {
//   console.log(data);
//   var content;
//   var option;
//   var qty = 0;
//   var element = document.querySelector(".quantity");
//   element.value = qty;

//   $.each(data.products, function (i, item) {
//     // console.log(item);
//     content +=
//       '<div class="card" style="width: 30rem; ">' +
//       '<img src="' +
//       item.image.src +
//       ' class="card-img-top" alt="..." style="width: 17rem;"/>' +
//       '<div class="card-body"' +
//       ' <h5 class="card-title">' +
//       item.title +
//       "</h5><br>" +
//       +'<p class="card-text text-align-center">' +
//       item.body_html +
//       ".</p>";
//     option = "<div>";
//     $.each(item.variants, function (i, item) {
//       option +=
//         '<button type="bouton" class="btn btn-info m-1" onclick="sendData(' +
//         item.id +
//         ')">' +
//         item.title +
//         "</button>";
//     });
//     option +=
//       "</div>" + ' <a href="#" class="btn btn-primary">Acheter</a></div>';
//   });
//   //ecouteur sur le bouton plus
//   document.querySelector(".plus").addEventListener("click", function () {
//     element.value = qty++;
//   });
//   document.querySelector(".moins").addEventListener("click", function () {
//     element.value = qty--;
//   });

//   document.querySelector(".container").innerHTML = content + option;
// });

// function sendData(id) {
//   var id = id;
//   var order = {};

//   $.ajax({
//     url: "/order",
//     type: "POST",
//     data: (order = {
//       line_items: [
//         {
//           variant_id: id,
//           quantity: 1,
//         },
//       ],
//     }),
//     dataType: "json",
//     success: function () {
//       alert("OK");
//     },
//     error: function () {
//       alert("error saving order");
//     },
//   });
// }
