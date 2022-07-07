# StockAPI

[![Node.js CI](https://github.com/PSebaRaj/StockMarketAPI/actions/workflows/node.js.yml/badge.svg?style=for-the-badge)](https://github.com/PSebaRaj/StockMarketAPI/actions/workflows/node.js.yml)

This API has two callable functions:

getHistStock(ticker, selector, timePeriod)

- ticker: String (valid stock ticker)
- selector: String (open, close, high, low, volume)
- timePeriod: Integer (data from timePeriod number of trading days)

getCurrStock(ticker, selector)

- ticker: String (valid stock ticker)
- selector: String (price, priceChange)

Created by Patrick SebaRaj 2022.
