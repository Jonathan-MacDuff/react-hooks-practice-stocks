import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [stocksToDisplay, setStocksToDisplay] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((data) => {
      setStocks(data);
      setStocksToDisplay(data)})
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/portfolio")
    .then((r) => r.json())
    .then((data) => setPortfolio(data))
  }, []);

  function handlePortfolioAdd(event, stock) {
    fetch("http://localhost:3001/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(stock),
    });
    const updatedPortfolio = [...portfolio, stock];
    setPortfolio(updatedPortfolio);
  };

  function handlePortfolioDelete(event, stock) {
    fetch(`http://localhost:3001/portfolio/${stock.id}`, {
      method: "DELETE",
    });
    const updatedPortfolio = portfolio.filter((s) => s.id !== stock.id);
    setPortfolio(updatedPortfolio);
  };

  function handleFilter(event) {
    const displayStocks = stocks.filter((stock) => {
      if (event.target.value === "All") {
        return true
      } else {
      return stock.type === event.target.value
      }
    })
    setStocksToDisplay(displayStocks);
  };

  function handleSort(event) {
    if(event.target.value === "Alphabetically") {
      const reorderedStocks = [...stocksToDisplay].sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      setStocksToDisplay(reorderedStocks)
    } else if(event.target.checked === true) {
      const reorderedStocks = [...stocksToDisplay].sort((a, b) => {
        return a.price - b.price;
      })
      setStocksToDisplay(reorderedStocks)
    }
  };


  return (
    <div>
      <Header />
      <MainContainer 
      stocks={stocksToDisplay}
      portfolio={portfolio}
      handlePortfolioAdd={handlePortfolioAdd}
      handlePortfolioDelete={handlePortfolioDelete}
      handleFilter={handleFilter}
      handleSort={handleSort}
      />
    </div>
  );
}

export default App;
