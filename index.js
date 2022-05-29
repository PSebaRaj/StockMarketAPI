import express from "express";
import axios from "axios";

import endpoints from "./routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("", endpoints);

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));

// API
// given ticker and selector (either "price" or "priceChange") return the current price or change in price
export function getCurrStock(ticker, selector) {
  axios
    .get(`https://psebaraj-stock-scraper.herokuapp.com/${ticker}/${selector}`, {
      responseType: "json",
    })
    .then((response) => {
      switch (selector) {
        case "price":
          console.log(response.data.price);
          return response.data.price;

        case "priceChange":
          console.log(response.data.priceChange);
          return response.data.priceChange;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// API
// given ticker and selector (either "open", "close", "high", "low", "volume")
// and timeperiod (num of historical trading days, i.e. 1 to ~253)
// will return the corresponding data as an array
export function getHistStock(ticker, selector, timePeriod) {
  axios
    .get(
      `https://psebaraj-stock-scraper.herokuapp.com/${ticker}/hist/${selector}`,
      {
        responseType: "json",
      }
    )
    .then((response) => {
      var data = [];

      switch (selector) {
        case "open":
          for (var i in response.data.openPrices) {
            data.push(parseFloat(response.data.openPrices[i]));
          }
        case "close":
          for (var i in response.data.closePrices) {
            data.push(parseFloat(response.data.closePrices[i]));
          }
        case "high":
          for (var i in response.data.highPrices) {
            data.push(parseFloat(response.data.highPrices[i]));
          }
        case "low":
          for (var i in response.data.lowPrices) {
            data.push(parseFloat(response.data.lowPrices[i]));
          }
        case "volume":
          for (var i in response.data.volume) {
            data.push(parseInt(response.data.volume[i]));
          }
      }

      console.log(data.splice(0, timePeriod));
      return data.splice(0, timePeriod);
    })
    .catch((error) => {
      console.log(error);
    });
}

// // Use Example:
// getCurrStock("AAPL", "price");
// getHistStock("TSLA", "high", 20);
