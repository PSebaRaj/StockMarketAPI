import axios from "axios";
import cheerio from "cheerio";

// get current price of stock
export const currPrice = async (req, res) => {
  const { ticker } = req.params;

  try {
    const url = `https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const currData = $("fin-streamer:nth-child(1)")
      .get()
      .map((val) => $(val).text());

    const currPrice = currData[6];

    res.header("Access-Control-Allow-Origin", "*");

    res.send({ price: currPrice });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

// get daily change in price of stock (in Dollars, NOT percentage)
export const currPriceChange = async (req, res) => {
  const { ticker } = req.params;

  try {
    const url = `https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const currData = $("fin-streamer:nth-child(2)")
      .get()
      .map((val) => $(val).text());

    const priceChange = currData[6];

    res.send({ priceChange });
  } catch (error) {
    res.json(error);
  }
};

// get historical CLOSING price of stock over last 365 days (non-trading days omitted)
export const histClose = async (req, res) => {
  const { ticker } = req.params;

  try {
    const url = `https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const closePrices = $("td:nth-child(6)")
      .get()
      .map((val) => $(val).text());

    res.send({ closePrices });
  } catch (error) {
    res.json(error);
  }
};

// get historical OPENING price of stock over last 365 days (non-trading days omitted)
export const histOpen = async (req, res) => {
  const { ticker } = req.params;

  try {
    const url = `https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const openPrices = $("td:nth-child(2)")
      .get()
      .map((val) => $(val).text());

    res.send({ openPrices });
  } catch (error) {
    res.json(error);
  }
};

// get historical HIGHEST price of the day of a stock over last 365 days (non-trading days omitted)
export const histHigh = async (req, res) => {
  const { ticker } = req.params;

  try {
    const url = `https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const highPrices = $("td:nth-child(3)")
      .get()
      .map((val) => $(val).text());

    res.send({ highPrices });
  } catch (error) {
    res.json(error);
  }
};

// get historical LOWEST price of the day of a stock over last 365 days (non-trading days omitted)
export const histLow = async (req, res) => {
  const { ticker } = req.params;

  try {
    const url = `https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const lowPrices = $("td:nth-child(4)")
      .get()
      .map((val) => $(val).text());

    res.send({ lowPrices });
  } catch (error) {
    res.json(error);
  }
};

// get historical VOLUME of a stock over last 365 days (non-trading days omitted)
export const histVolume = async (req, res) => {
  const { ticker } = req.params;

  try {
    const url = `https://finance.yahoo.com/quote/${ticker}/history?p=${ticker}`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const volume = $("td:nth-child(7)")
      .get()
      .map((val) => $(val).text());

    res.send({ volume });
  } catch (error) {
    res.json(error);
  }
};
