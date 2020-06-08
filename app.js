const express = require("express");
const app = express();
const fetch = require("node-fetch");
var path = require("path");
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));


// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/products", async (req, res) => {
  const response = await fetch(
    `https://boutique-nike-nc.myshopify.com/admin/api/2020-04/products.json`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Basic M2Q2OTc2YjljNDFjN2QwZWIzZDM0NWJhOWZkNWE5MDA6c2hwcGFfNTUwZmNhYjgwYTllOGExNzMyYjYzZmUyMDQ5NzZiMjQ=`,
      },
    }
  );
  res.send(await response.json());
});

app.get("/orders", async (req, res) => {
  const response = await fetch(
    `https://boutique-nike-nc.myshopify.com/admin/api/2020-04/orders.json`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Basic M2Q2OTc2YjljNDFjN2QwZWIzZDM0NWJhOWZkNWE5MDA6c2hwcGFfNTUwZmNhYjgwYTllOGExNzMyYjYzZmUyMDQ5NzZiMjQ=`,
      },
    }
  );
  res.send(await response.json());
});

app.post("/order", async (req, res) => {
  
  const response = await fetch(
    `https://boutique-nike-nc.myshopify.com/admin/api/2020-04/orders.json`,
    {
      method: "post",
      body: JSON.stringify(req.body),
      headers: {
        Accept: "application/json",
        Authorization: `Basic M2Q2OTc2YjljNDFjN2QwZWIzZDM0NWJhOWZkNWE5MDA6c2hwcGFfNTUwZmNhYjgwYTllOGExNzMyYjYzZmUyMDQ5NzZiMjQ=`,
      },
    }
  );
 
  res.send(await response.json());
  console.log(req.body);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
