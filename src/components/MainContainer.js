import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ 
  stocks, portfolio, handlePortfolioAdd, 
  handlePortfolioDelete, handleFilter, handleSort }) {
  return (
    <div>
      <SearchBar 
      handleFilter={handleFilter}
      handleSort={handleSort}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={stocks}
          handlePortfolioAdd={handlePortfolioAdd}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          portfolio={portfolio}
          handlePortfolioDelete={handlePortfolioDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
