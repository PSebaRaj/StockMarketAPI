## StockMarketAPI - GitHub Pages

Created an API to fetch live (15-minute delayed) and historic (up to a year in the past, or about 252 trading days). 

The user can either call one of two functions, and data in the form of floats, or arrays of floats, is returned, or the user fetch JSON data from one of the endpoints directly.

Currently hosted on Heroku and available to the public for free! For example, if you want to get the current price of an Apple share, use: 
```
https://psebaraj-stock-scraper.herokuapp.com/AAPL/price
```
to get:
```json
{
  "price":"147.04"
}
```
More information about how to use this API can be found in the repo.

### Languages
- Javascript
