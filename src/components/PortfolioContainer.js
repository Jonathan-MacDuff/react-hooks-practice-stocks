import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handlePortfolioDelete }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock 
        handlePortfolio={handlePortfolioDelete}
        key={stock.id} 
        stock={stock}  
        /> 
      ))}
    </div>
  );
}

export default PortfolioContainer;
