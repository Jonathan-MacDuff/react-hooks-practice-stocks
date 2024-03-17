import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handlePortfolioAdd }) {


  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock 
        handlePortfolio={handlePortfolioAdd}
        key={stock.id} 
        stock={stock} 
        />
      ))}
    </div>
  );
}

export default StockContainer;
