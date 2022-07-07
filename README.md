# StockAPI
[![Latest Release](https://img.shields.io/github/v/release/psebaraj/StockMarketAPI?include_prereleases&style=for-the-badge)](https://github.com/psebaraj/StockMarketAPI/releases)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](/LICENSE)
[![Build Status](https://img.shields.io/github/workflow/status/psebaraj/StockMarketAPI/node.js?style=for-the-badge)](https://github.com/PSebaRaj/StockMarketAPI/actions/workflows/node.js.yml)

[![Build Status](https://img.shields.io/github/workflow/status/psebaraj/gogetitdone/Go?style=for-the-badge)](https://github.com/PSebaRaj/GoGetItDone/actions/workflows/go.yml)

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
