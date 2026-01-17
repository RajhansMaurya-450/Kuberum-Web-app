import React from "react";
//import {positions } from "../data/data.js";  //importing data from static files
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Position = () => {

  const [positions, setPositions] = useState([]);  //getting data from backend
  useEffect(() => {
    const fetchPosition = async () => {
      axios.get("http://localhost:3002/allposition").then((res) => {
        console.log(res.data);
        setPositions(res.data);
      });
    }
    fetchPosition();
  }, []);

  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((stock, index) => {
            const currentVal = stock.price * stock.qty;
            const isProfit = currentVal - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}.</td>
                <td>{stock.avg.toFixed(2)}</td>

                <td>{currentVal.toFixed(2)}</td>
                <td className={profitClass}>{(currentVal - stock.avg * stock.qty).toFixed(2)}</td>

                <td className={dayClass}>{dayClass}</td>
              </tr>
            )

          })}
        </table>
      </div>
    </>
  );
};

export default Position;
