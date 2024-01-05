import React from 'react';
import Highlightbar from "../highlightbar/Highlightbar"; 
import Dropmonth from "../dropmenu/Dropmonth"; 
import Chart1 from "../charts/Chart1";
import Chart2 from "../charts/Chart2";  
import Table from "../charts/Table";  
import "./Displaybar.css"; // Import the CSS file for Displaybar


const Displaybar = () => {
 
  return (
    <div className="displaybar">
      <div className="selector">
     < Dropmonth/>
      </div>
      <div className="highlights">
        <Highlightbar />
        <Highlightbar />
        <Highlightbar />
        <div className="total-reach">
          <p>Total number of reached suppliers</p>
        </div>
      </div>
      <div className="charts">
        <div className="revenue-chart chart">
       <Chart1/>
        </div>
        <div className="div-1">
        <div className="emission-chart chart">
        <Chart2/>
        </div>
        <div className="supplier-chart chart">
        <Table/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Displaybar;

