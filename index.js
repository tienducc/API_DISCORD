const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  const url = process.env.API;
  setInterval(async () => {
    try {
      const response = await fetch(url)
        .then((data) => {
          if (!data.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
          }
          return data.json();
        })
        .catch((e) => {
          console.error("Fetch error:", err.message);
          throw err;
        });
      //   let tun = response.map((item) => `<li>${item.ping}</li>`);
      //   tun = tun.join("");
      //   res.send(`<ul>${tun}</ul>`);
      res.json(response);
    } catch {
      console.log("abc");
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
